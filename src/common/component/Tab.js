import React,{useState,useEffect,useRef} from 'react'
import BScroll from 'better-scroll'
import 'css/tab.css'
function Tab(props) {
	let scroll = null
	const sRef = useRef(null)
	let autoScroll = 0
	let touchPage = {}
	const [currentPage, setCurrentPage] = useState(0)
	useEffect(() => {
		scroll = new BScroll(sRef.current,{
			scrollX:true,
			scrollY:false,
			eventPassthrough:'vertical',
			momentum:false,
			snap:{
				loop:true
			}
		})
		scroll.on('scrollEnd',()=>{
				setCurrentPage(()=>{
					return	scroll.getCurrentPage().pageX
				})
		})
		if (props.autoScroll) {
			autoScroll = setInterval(()=>{
				scroll.next();
			},2000)
		}
		sRef.current.addEventListener("touchstart",(e)=>{
			let {pageX,pageY} = e.changedTouches
			touchPage.x = pageX
			touchPage.y = pageY
			clearInterval(autoScroll)
		})
		sRef.current.addEventListener("touchend",(e)=>{
			let {pageX,pageY} = e.changedTouches
			if (Math.abs(touchPage.x-pageX)<5&&Math.abs(touchPage.y-pageY)<5) {
				
			}
			if (props.autoScroll) {
				autoScroll = setInterval(()=>{
					scroll.next();
				},2000)
			}
		})
		return ()=>{
			clearInterval(autoScroll)
		}
	}, [])
	return (
		<div className='Tab'>
			<div className='tabMain' ref={sRef}>
				<ul className='tabWrap' style={{width:(props.data.length+1) * 100 + "vw"}}>
					{
						props.data.map(
							(data,index)=>{
								return <li className='tabItem' key={index}>
									{
										props.render(data)
									}
								</li>
							}
						)
					}
				</ul>
			</div>
			<ul className='tabIcon' style={{"gridTemplateColumns": `repeat(${props.data.length},1fr)`}}>
				{
					props.data.map(
							(cla,index)=>{
								return <li className={(index==currentPage)?"indicationItem indicationActive":"indicationItem"} key={index}></li>
							}
					)
				}				
			</ul>
		</div>
	)
}
export default Tab