import React,{useEffect,useRef,useContext,memo} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {loading} from 'store/actions'
import "common/css/works.css"
import {mock} from 'mockjs'
function Works(props) {
	const {data:works,isLoading,loadingEnd} = props
	const ref = useRef(null)
	useEffect(() => {
		props.dispatch(loading())
	}, [])
	useEffect(() => {
		const imgs = ref.current.querySelectorAll('img')
		imgs.forEach((img)=>{
			img.addEventListener('load',()=>{
				props.loaded()
			})
		})
	}, [works])
	const imgData = [
		require('common/image/swiper1.jpg'),
		require('common/image/swiper2.jpg'),
		require('common/image/swiper3.jpg'),
		require('common/image/swiper4.jpg'),
		require('common/image/swiper5.jpg')
	]	
	const history = useHistory()
	return (
		<div className="Works" ref={ref}>
			<h3>学员作品</h3>
			<ul>
				{
					works.length?works.map(({name,commentsCount,goodsCount,image},index)=>{
						return <li key={index} className='sClick'
							onClick={()=>{
								history.push({pathname:`/work/${index}`,state:{name,commentsCount,goodsCount,image}})
							}}>
							<a href="/#" className="item sClick" onClick={	(e)=>{ e.preventDefault() }}>
								<img src={image} alt="" className='sClick'/>
								<span className='sClick'>
									<strong className='sClick'>{name}</strong>
									<em className='sClick iconfont icon-bianji'> {commentsCount}</em>
									<em className='sClick iconfont icon-xihuan'> {goodsCount}</em>
								</span>
							</a>
						</li>
					}):(<li>正在加载中...</li>)
				}
			</ul>
			<a href="/#" className="pullup" onClick={(e)=>{
				e.preventDefault()
			}}>{loadingEnd?'下面没有了':'上拉加载更多...'}</a>
		</div>
	)
}
export default memo(connect(res=>res.works)(Works))