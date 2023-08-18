import React,{useState,useEffect,useRef} from 'react'
import BScroll from 'better-scroll'
import 'css/tab.css'
function Tab(props) {
	const [currentPage, setCurrentPage] = useState(0)
	const sRef = useRef(null)
	let scroll = null
	let autoScroll = 0
	useEffect(() => {
		if (!props.data) {
			return
		}
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
		if (props.autoScroll) {
			autoScroll = setInterval(()=>{
				scroll.next(200);
			},2000)
		}
		scroll.on('scrollEnd',()=>{
			let page = scroll.getCurrentPage().pageX
			if (page == props.data.length) {
				page = 0
				scroll.goToPage(0,0,0)
			}

			setCurrentPage(page)
		})

		sRef.current.addEventListener("touchstart",(e)=>{
			clearInterval(autoScroll)
		})
		sRef.current.addEventListener("touchend",(e)=>{
			if (props.autoScroll) {
				autoScroll = setInterval(()=>{
					scroll.next(200);
				},2000)
			}
		})
		return ()=>{
			clearInterval(autoScroll)
		}
	}, [props.data])
	if (!props.data) return null
	return (
		<div className='Tab'>
			<div className='tabMain clearFix' ref={sRef}>
				<ul className='tabWrap'>
					{
						props.data?props.data.map(
							(data,index)=>{
								return <li className='tabItem' key={index}>
									{
										props.render(data)
									}
								</li>
							}
						):null
					}
				</ul>
			</div>
			{
				props.data?<ul className='tabIcon' 
				style={{"gridTemplateColumns": `repeat(${props.data.length},1fr)`}}>
				{
					props.data.map(
							(cla,index)=>{
								return <li className={(index==currentPage)?"indicationItem indicationActive":"indicationItem"} key={index}></li>
							}
					)
				}				
			</ul>:null
			}
		</div>
	)
}
export default Tab