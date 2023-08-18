import React,{useState,useEffect,useRef} from 'react'
import BScroll from 'better-scroll'
import 'css/tab.css'
function Tab(props) {
	if (!props.data) return (<div>没内容。</div>)
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
			click:true,
			snap:{
				loop:true
			}
		})
		scroll.on('scrollEnd',()=>{
				// console.log(scroll.getCurrentPage());
				// setCurrentPage(scroll.getCurrentPage().pageX)
		})

		sRef.current.addEventListener("touchstart",(e)=>{
			let {pageX,pageY} = e.changedTouches[0]
			touchPage.x = pageX
			touchPage.y = pageY
			clearInterval(autoScroll)
		})
		sRef.current.addEventListener("touchend",(e)=>{
			let {pageX,pageY} = e.changedTouches[0]
			if (Math.abs(touchPage.x-pageX)<5&&Math.abs(touchPage.y-pageY)<5) {
				
			}
			if (props.autoScroll) {
				autoScroll = setInterval(()=>{
					scroll.next(200);
				},2000)
			}
		})
		if (props.autoScroll) {
			autoScroll = setInterval(()=>{
				scroll.next(200);
			},2000)
		}
		return ()=>{
			clearInterval(autoScroll)
		}
	}, [])
	return (
		<div className='Tab'>
			<div className='tabMain' ref={sRef}>
				<ul className='tabWrap'>
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
			<ul className='tabIcon' 
				style={{"gridTemplateColumns": `repeat(${props.data.length},1fr)`}}>
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