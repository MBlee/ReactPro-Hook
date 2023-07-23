import React from 'react'
import Frame from 'component/Frame.js'
import TimeTable from './timeTable'
import Footer from 'common/component/Footer'
export default function Course() {
	return (
		<div>
			<Frame isPullUp={false} bounce={{top:false,bottom:false,left:false,right:false}}>

				<TimeTable></TimeTable>

				<Footer></Footer>
			</Frame>	
		</div>
	)
}