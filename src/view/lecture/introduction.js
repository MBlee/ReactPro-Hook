import "common/css/introduction.css"
import React from 'react'
import {mock} from 'mockjs'
export default function Introduction() {
	return (
		<div className='Introduction'>
			<a href="/#" className="head"><img src={require("common/image/swiper1.jpg")} alt="" /></a>
			<p className="detail">{mock('@cparagraph')}</p>
		</div>
	)
}