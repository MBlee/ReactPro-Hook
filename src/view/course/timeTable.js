import 'common/css/timeTable.css'
import React from 'react'
import {mock} from 'mockjs'
export default function TimeTable() {
	const times = mock([
		{'date':"周一",'rowCount':2,'columCount':2,'content|2':['@ctitle(5,10)']},
		{'date':"周二",'rowCount':2,'columCount':2,'content|2':['@ctitle(5,10)']},
		{'date':"周三",'rowCount':2,'columCount':2,'content|2':['@ctitle(5,10)']},
		{'date':"周四",'rowCount':2,'columCount':2,'content|2':['@ctitle(5,10)']},
		{'date':"周五",'rowCount':1,'columCount':2,'content':['@ctitle(5,10)']},
		{'date':"周末",'rowCount':1,'columCount':1,'content':['@ctitle(10)']},
	])
	const ctime = (columCount,rowCount,i)=>{
		if (columCount == 2) {
			if (rowCount == 2) {
				return (
						<td>{i==0?'上午':'下午'}</td>
					)
			}
			if (rowCount == 1) {
				return(
					<td>全天</td>
				)
			}
		}
		return ''
	}
	const randomBg = ()=>{
		return mock({
			'colors|1':['#FAF3F0','#EEEDED','#EDE4FF','#F8FDCF']
		}).colors
	}
	return (
		<section className="TimeTable">
				<table>
					<caption>
						<h2>一周学习安排</h2>
						<p>Class Schedule</p>		
					</caption>
					<thead>
						<tr>
							<th>星期</th>
							<th>时间</th>
							<th>学习内容</th>
						</tr>
					</thead>
					<tbody>
						{
							times.map(({date,rowCount,columCount,content},index)=>{
								return (
										content.map((c,i)=>{
											return (
												<tr key = {i}>
													{i==0?<td className='date' rowSpan={rowCount==2?'2':'1'}
														style={{'color':mock('@color'),'backgroundColor':randomBg()}}
													>{date}</td>:''}
													{ctime(columCount,rowCount,i)}
													<td colSpan={columCount==1?2:1} align={columCount==1?'center':'left'}>{c}</td>
												</tr>
											)
										})
									)
							})
						}
					</tbody>

				</table>
				<p className='foot'>
					<span>更多详情课程安排请点击：</span>
					<a href="www.baidu.com">www.baidu.com</a>
				</p>
		</section>
	)
}