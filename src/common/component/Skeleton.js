import '../css/skeleton.css'
import React from 'react'
import {mock} from 'mockjs'
export default function Skeleton() {
	const skeletonCounts=mock(()=>{
		const arr = mock({
			"rows|4-7":[1]
		}).rows
		arr.reduce((pre,item,index)=>{
			const secArr = mock({"colomns|3-7":[1]}).colomns
			pre.fill(secArr,index,index+1)
			return pre
		},arr)
		return arr
	})
	return (
		<div className='Skeleton'>
			{
				skeletonCounts.map((rows,index)=>{
					return <ul className="rows" key={index}>
						{
							rows.map((columns,index)=>{
								return <li className="columns" key={index}></li>
							})
						}
					</ul>
				})
			}
		</div>
	)
}