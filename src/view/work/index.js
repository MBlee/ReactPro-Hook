import React,{useEffect,useState,useMemo} from 'react'
import {withRouter,useParams,useLocation} from 'react-router-dom'
import {connect,useSelector} from 'react-redux'
import Frame from 'component/Frame.js'
import {workLoading,loadingComment} from 'store/actions'

import {WORKSET} from 'store/constants'
import 'common/css/work.css'
import Skeleton from 'common/component/Skeleton'
import Tab from 'component/Tab'
import Art from './art'
import Revert from './revert'
import Reply from './reply'
import {mock} from 'mockjs'
function Work(props) {
	const location = useLocation()
	const {Id} = useParams()
	useEffect(() => {
		props.dispatch(workLoading())
		return () => {
			props.dispatch({type:WORKSET})
		};
	}, [])
	const {image}=props.data
	const commentData = useSelector(state=>state.comment)
	let tabItem = (()=>{
		if (image != undefined) {
			return <Tab data={image} autoScroll={true}
					render={
						(img)=>{
							return (
								<img src={img}/>
							)
						}
					}>
			</Tab>
		}
		return ''
	})()

	const pullUpLoad = (scroll)=>{
		props.dispatch(loadingComment()).then((res)=>{
			scroll.refresh()
			scroll.finishPullUp()
			if (!res) {
				scroll.closePullUp()
			}
		})
	}
	const [show, setShow] = useState(false)
	const count = useMemo(() => {
		return mock('@integer(0,100)')
	}, [])
	return (
		<div className='Work' onClick={()=>{
			setShow(!show)
		}}>
			<Frame isPullUp={true} pullUpLoad={pullUpLoad}  bounce={true}>
				{
					props.isLoading?<Skeleton></Skeleton>:(<div>
						{tabItem}
						<Art></Art>
						<Revert count={count} isGoods={props.goods.goods}></Revert>
					</div>
					)
				}
			</Frame>
			<Reply show={show}></Reply>

		</div>
	)
}
export default connect(res=>({...res.work,goods:res.goods}))(Work)