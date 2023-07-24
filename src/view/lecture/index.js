import React,{useState} from 'react'
import Frame from 'component/Frame.js'
import LectureTab from './lectureTab'
import JoinUs from './joinUs'
import Introduction from './introduction'
import Footer from 'common/component/Footer'
import LecModal from './lecModal'
export default function Lecture() {
	const [showModal, setShowModal] = useState(false)
	return (
		<div>
			{showModal?(<LecModal clicked={()=>{
					setShowModal(!showModal)
				}}
				></LecModal>):''}
			<Frame isPullUp={false} bounce={{top:false,bottom:false,left:false,right:false}}>
				<LectureTab clicked={()=>{
					setShowModal(!showModal)
				}}></LectureTab>
				<JoinUs></JoinUs>
				<Introduction clicked={()=>{
					setShowModal(!showModal)
				}}></Introduction>
				<Footer></Footer>
			</Frame>
		</div>
	)
}