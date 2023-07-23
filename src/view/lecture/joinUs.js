import 'common/css/joinUs.css'
import React from 'react'
import {mock} from 'mockjs'
export default function JoinUs() {
	const jobs = mock({
		'jobs|4':[
			{
				'jobTitle':'@ctitle(2,6)',
				'num|2-10':0,
				'type|1':['底薪+提成','面议']
			}
		]
	}).jobs
	const touchs = {
		onTouchStart(e){
			e.currentTarget.style['color'] = 'white'
			e.currentTarget.style['background-color'] = '#3E001F'
		},
		onTouchEnd(e){
			e.currentTarget.style['color'] = '#3E001F'
			e.currentTarget.style['background-color'] = 'white'
		}
	}
	return (
		<div className="JoinUs">
			<h2 className="head">加入我们</h2>
			<ul className='body'>
				{
					jobs.map((job,index)=>{
						return <li key={index} {...touchs}>
							<h2>{job.jobTitle}</h2>
							<p>人数：{job.num}人</p>
							<p>薪资：{job.type}</p>
						</li>
					})
				}
			</ul>
		</div>
	)
}