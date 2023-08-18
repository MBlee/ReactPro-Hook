import React,{useState,useEffect,useRef,useCallback} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import BScroll from 'better-scroll'
import '../css/frame.css'
import Header from './Header'
import Menu from './Menu'
import {indexCoords} from 'store/actions'

import {useInnerHeight} from 'hook'
export default function Frame(props) {
	const [showMenu, setShowMenu] = useState(false)
	const uHeight = useInnerHeight()
	let scroll = null
	const scrollRef = useRef(null)
	const dispatch = useDispatch()
	let time = 0
	useEffect(() => {
		scroll = new BScroll(scrollRef.current,{
			preventDefaultException:{
				tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
				className:/(^|\s)sClick(\s|$)/
			},
			pullUpLoad:props.isPullUp?{threshold:100}:false,
			bounce:props.bounce,
			click:true
		})
		if (props.isPullUp) {
			scroll.on('pullingUp',()=>{
				props.pullUpLoad(scroll)
			})
			scroll.on('scrollEnd',(e)=>{

			})
		}

	}, [])
	useEffect(() => {
		console.log('更新一下');
		scroll&&scroll.refresh()
	}, [props.fresh])
	return (
		<div className='frame'>
			<Header show={()=>{
				setShowMenu(!showMenu)
			}}/>
			<Menu show={()=>{
				setShowMenu(!showMenu)
			}}/>
			<div className='main'  ref={scrollRef} style={{
				transform:showMenu?'translateX(25vw)':'none',
				height:(uHeight-40)+'px'
			}}>
				<div className='mainbox'>
					{props.children}
				</div>
			</div>
		</div>
	)
}