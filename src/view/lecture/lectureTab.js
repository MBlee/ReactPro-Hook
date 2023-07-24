import 'common/css/lectureTab.css'
import Tab from 'common/component/Tab.js'

import React from 'react'
import {mock} from 'mockjs'

export default function LectureTab({clicked}) {
	const imgData = [
		require('common/image/swiper1.jpg'),
		require('common/image/swiper2.jpg'),
		require('common/image/swiper3.jpg'),
		require('common/image/swiper4.jpg'),
		require('common/image/swiper5.jpg'),
		require('common/image/swiper2.jpg'),
		require('common/image/swiper3.jpg'),
		require('common/image/swiper4.jpg'),
		require('common/image/swiper5.jpg'),
		require('common/image/swiper2.jpg'),
		require('common/image/swiper3.jpg'),
		require('common/image/swiper4.jpg'),
		require('common/image/swiper5.jpg'),
		require('common/image/swiper4.jpg'),
		require('common/image/swiper5.jpg'),
		require('common/image/swiper4.jpg'),
		require('common/image/swiper5.jpg')
	]
	const dimensions = ((arr)=>{
			const newArr = []
			return arr.reduce((a,item,index)=>{
				if (index%3 == 0) {
					const temArr = []
					const bound = index+3>arr.length?arr.length:index+3
					for (var i = index; i < bound; i++) {
						temArr.push(arr[i])
					}
					newArr.push(temArr)
				}
				return newArr
			},newArr)
		})(imgData);
	const touchPage = {x:0,y:0}
	const touches = {
		onTouchStart(e){
			let {pageX,pageY} = e.changedTouches[0]
			touchPage.x = pageX
			touchPage.y = pageY
		},
		onTouchEnd(e){
			let {pageX,pageY} = e.changedTouches[0]
			if (Math.abs(touchPage.x-pageX)<5&&Math.abs(touchPage.y-pageY)<5) {
				clicked()					
			}
		}
	}
	return (
		<div className='LectureTab'>
				<div className="title">
					<h3>宇宙银河队</h3>
					<p>Cosmos Team</p>
				</div>
				<Tab data={dimensions} autoScroll={false}
						render={
							(imgs)=>{
								return (
									<ul className='itemWrap'>
										{
											imgs.map((img,index)=>{
													return (
													<li key={index} className="item" {...touches}>
														<a href="/#" onClick={(e)=>{e.preventDefault()}}><img src={img}/></a>
														<p>{mock('@cname')}</p>
													</li>
												)
												})
										}
									</ul>
								)
							}
						}>
				</Tab>
		</div>
	)
}