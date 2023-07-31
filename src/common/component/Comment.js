import 'common/css/comment.css'

import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {mock} from 'mockjs'
import ToDate from 'common/component/ToDate'
export default function Comment() {
	const {commentList} = useSelector(state=>state.comment)

	return (
		<div className='Comment'>
			<ul>
				{commentList.length>0?
					commentList.map((c,index)=>{
						const {head,username,content,date,children} = c
						return <li key={index} className='pLi'>
							<img src={head} alt="" />
							<h3>{username}</h3>
							<p className="content">{content}</p>
							<p className="bottom">
								<span><ToDate date={date}/></span>
								<span>✎</span>
							</p>
							
								{
									children.length>0?<ul className='child'>{
											children.map((child,index)=>{
												const {head,username,content,date} = child
												return (	
													<li key={index}>
															<img src={head} alt="" />
															<h3>{username}</h3>
															<p className="content">回复<strong>{username}: </strong>{content}</p>
															<p className="bottom">
																<span><ToDate date={date}/></span>
																<span>✎</span>
															</p>
													</li>
													)
											})}
									</ul>
									:''
								}
						</li>
					})
					:<div>快来评论一条吧</div>}
			</ul>
		</div>
	)
}