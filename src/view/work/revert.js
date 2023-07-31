import 'common/css/revert.css'

import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {NO_GOODS,GOODS,COMMENT_RESET} from 'store/constants'
import {goods,no_goods,loadingComment} from 'store/actions'
import Comment from 'common/component/Comment'
import {addComment} from 'store/actions'

export default function Revert(props) {
	const [count, setCount] = useState(props.count)
	let page={};
	const state= useSelector(state=>({goods:state.goods,login:state.login}))
	const dispatch = useDispatch()
	const history = useHistory()
	const touches = {
		onTouchStart(e){
			page.x = e.changedTouches[0].pageX
			page.y = e.changedTouches[0].pageY
		},
		onTouchEnd(e){
			const {pageX,pageY} = e.changedTouches[0]
			if(Math.abs(pageX-page.x)<5 && Math.abs(pageY-page.y)<5){
				if (state.login.user) {
						if (state.goods.goods) {
							dispatch(no_goods(state.login.user))
							setCount(count-1)
							return
						}else{
							dispatch(goods(state.login.user))
							setCount(count+1)
							return
						}
						
				}
				history.push('/login')
			}
		}
	}
	useEffect(() => {
		dispatch(loadingComment())
		return ()=>{
			dispatch({type:COMMENT_RESET})
		}
	}, [])
	const [content, setContent] = useState('')
	const {commentList,isLoading,isEnding} = useSelector(state=>state.comment)
	const user = useSelector(state=>state.login.user)
	return (
		<div className='Revert'>
			<div className="goods">
				<em className='text'>有{count}人觉得很赞</em>
				<em className={state.goods.goods?'icon isGoods':'icon'}
					{...touches}
				>❤</em>
			</div>
			<div className="input">
				<input type="text" placeholder='发表评论' value={content} 
				onChange={
						(e)=>{
							setContent(e.target.value)
						}
					}
				onKeyDown={
					(e)=>{
						if (e.key == "Enter") {
							if (!user) {
								history.push('/login')
								return
							}
							if(!content.trim()){
								console.log('请输入内容！');
							}else{
								setTimeout(()=>{
									const data = {
										head:require('common/image/swiper3.jpg'),
										username:user,
										content,
										date:new Date().toLocaleString(),
										children:[]
									}
									dispatch(addComment(data))
									setContent('')
								},1000)
							}
						}
					}
				} 

				/>
			</div>
			<Comment></Comment>
			<p className='more'>{isEnding?'下面没有了。':'加载更多...'}</p>
		</div>
	)
}