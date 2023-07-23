import React from 'react'
import Frame from 'component/Frame.js'
import LectureTab from './lectureTab'
import JoinUs from './joinUs'
import Introduction from './introduction'
import Footer from 'common/component/Footer'
import LecModal from './lecModal'
export default function Lecture() {
	return (
		<div>
			<Frame isPullUp={false} bounce={{top:false,bottom:false,left:false,right:false}}>
				{/*<LecModal></LecModal>*/}
				<LectureTab></LectureTab>
				<JoinUs></JoinUs>
				<Introduction></Introduction>
				<Footer></Footer>
			</Frame>
		</div>
	)
}