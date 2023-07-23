import React,{useEffect,useContext} from 'react'
import {connect} from 'react-redux'
import {loading} from 'store/actions'
import "common/css/works.css"
import {mock} from 'mockjs'
function Works(props) {
	const {data:works,isLoading,loadingEnd} = props
	useEffect(() => {
		props.dispatch(loading())
	}, [])
	const imgData = [
		require('common/image/swiper1.jpg'),
		require('common/image/swiper2.jpg'),
		require('common/image/swiper3.jpg'),
		require('common/image/swiper4.jpg'),
		require('common/image/swiper5.jpg')
	]	
	return (
		<div className="Works">
			<h3>学员作品</h3>
			<ul>
				{
					works.length?works.map(({name,commentsCount,goodsCount,image},index)=>{
						return <li key={index}>
							<a href="www.baidu.com" className="item">
								<img src={image} alt="" onLoad={()=>{
									props.loaded()
								}}/>
								<span>
									<strong>{name}</strong>
									<em>✉ {commentsCount}</em>
									<em>❤ {goodsCount}</em>
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
export default connect(res=>res.works)(Works)