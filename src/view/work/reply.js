import 'common/css/reply.css'
import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {addComment} from 'store/actions'
export default function Reply(props) {
	const [show, setShow] = useState(false)
	const [put, setPut] = useState(false)
	const [content, setContent] = useState('')
	const user = useSelector(state=>state.login.user)
	const history = useHistory()
	const dispatch = useDispatch()
	useEffect(() => {
		setShow(false)
	}, [props.show])
	return (
		<footer className="Reply" onClick={
			(e)=>{
				e.stopPropagation()
			}
		}>
		<div className="text" style={
				{
					transform:show?'translateY(-100%)':'translateY(0)',
					top:show?'0px':'40px'
				}
			}>
			<textarea value={content} onChange={
				(e)=>{
					setContent(e.target.value)
				}
			} name="" id="" cols="30" rows="10"></textarea>
		</div>
			{!show?<button onClick={
					(e)=>{
						if (!user) {
							history.push('/login')
							return
						}
						setShow(true)
					}
				}>
					 回复本贴 ✎
				</button>
				:<button className={put?'put':''} onClick={
					()=>{
						if(!content.trim()){
							console.log('请输入内容！');
						}else{
							setPut(true)
							setTimeout(()=>{
								console.log(new Date().toLocaleString());
								const data = {
									head:require('common/image/swiper3.jpg'),
									username:user,
									content,
									date:new Date().toLocaleString(),
									children:[]
								}
								dispatch(addComment(data))
								setPut(false)
								setShow(false)
								setContent('')
							},1000)
						}
					}
				}>
					 {
					 	put?"评论中..."
					 	:"发表评论"
					 }
				</button>
			}
				
				

		</footer>
	)
}