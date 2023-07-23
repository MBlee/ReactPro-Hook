import 'common/css/lecModal.css'
import React from 'react'
import {mock} from 'mockjs'
export default function LecModal() {
	return (
		<div className="LecModal">
			<div className="wrap">
				<img src={require('common/image/swiper1.jpg')} alt="" className="head"/>
				<span className="destroy">x</span>
				<h2 className="title">{mock('@ctitle')}</h2>
				<div className="content">{mock('@cparagraph(10,20)')}</div>
			</div>
		</div>
	)
}