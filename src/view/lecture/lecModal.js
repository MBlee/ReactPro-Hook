import 'common/css/lecModal.css'
import React,{useRef,useEffect} from 'react'
import {mock} from 'mockjs'
import BScroll from 'better-scroll'
export default function LecModal({clicked}) {
	const sRef = useRef(null)
	useEffect(() => {
		let scroll = new BScroll(sRef.current,{
			scrollY:true,
			scrollX:false,
			scrollbar: {
			 fade: true,
			 interactive: false // 1.8.0 新增
			}
		})
	}, [])
	return (
		<div className="LecModal" onClick={clicked}>
			<div className="wrap"  onClick={(e)=>{
					e.stopPropagation()
				}}>
				<img src={require('common/image/swiper1.jpg')} alt="" className="head"/>
				<span className="destroy" onClick={clicked}>x</span>
				<h2 className="title">{mock('@ctitle')}</h2>
				<div className="content" ref={sRef}>
					<div>
						{mock('@cparagraph(10,20)')}
					</div>
				</div>
			</div>
		</div>
	)
}