import React,{useEffect,useState,useContext,memo} from 'react'
import {connect,useSelector} from 'react-redux'
import Frame from 'component/Frame.js'
import Tab from 'component/Tab'
import SignUp from './signUp'
import RegisterVIP from './registerVIP'
import Feature from './feature'
import Works from './works'
import {loading,indexCoords} from 'store/actions'
import store from 'store'
import "common/css/index.css"
import {mock} from 'mockjs'

function Index(props) {

	const pullUpLoad = (scroll)=>{
		props.dispatch(loading()).then((res)=>{
			scroll.finishPullUp()
			scroll.refresh()
			const state = store.getState()
			if (state.works.data.length>10) {
				props.dispatch({
						type:"ENDLOADING"
				})
				scroll.closePullUp()
			}
		})
	}

	const [fresh, setFresh] = useState(false)
	const [imgData, setImgData] = useState(null)
	const [signData, setSignData] = useState(null)
	const [registData, setRegistData] = useState(null)
	const [featureData, setFeatureData] = useState(null)

	useEffect(() => {
		setImgData([
			require('common/image/swiper1.jpg'),
			require('common/image/swiper2.jpg'),
			require('common/image/swiper3.jpg'),
			require('common/image/swiper4.jpg'),
			require('common/image/swiper5.jpg')
		])
		setSignData([
			{
				pTitle:`WEB前端开发\n零基础课程`,
				price:0,
				pDetail:`PC静态页面，移动静态页面制作...`
			},{
				pTitle:`WEB前端开发\n零基础课程`,
				price:4800,
				pDetail:`PC静态页面，移动静态页面制作...`
			},{
				pTitle:`WEB前端开发\n零基础课程`,
				price:9200,
				pDetail:`PC静态页面，移动静态页面制作...`
			},{
				pTitle:`WEB前端开发\n零基础课程`,
				price:0,
				pDetail:`PC静态页面，移动静态页面制作...`
			},
		])
		setRegistData(mock({
			"title|1":"@first",
			"detail|3":["@csentence"],
			"price|100-200":1
		}))
		setFeatureData(mock({
			"title":"产品特色",
			"featureList|4":[{"icon":"@image(100x100,@color)","detail|2":"@csentence"}]
		}))
	}, [])

	return (
		<div>
			<Frame isPullUp={true} bounce={true} fresh={fresh} pullUpLoad={pullUpLoad}>
				<Tab data={imgData} 
						autoScroll={true}
						render={
							(img)=>{
								return (
									<img src={img}/>
								)
							}
						}>
				</Tab>
				<section className="sign-section">
					{
						signData?signData.map((data,index)=>{
							return <SignUp data={data} key={index}></SignUp>
						}):''
					}
				</section>
				<RegisterVIP data={registData}></RegisterVIP>
				<Feature data={featureData}></Feature>
				<Works loaded={()=>{
					const f = !fresh
					setFresh(f)
				}}></Works>
				
			</Frame>
		</div>
	)
}
export default connect(res=>res)(Index)