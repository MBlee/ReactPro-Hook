import "common/css/introduction.css"
import React from 'react'
import {mock} from 'mockjs'
export default function Introduction({clicked}) {
	const touchPage = {x:0,y:0}
	const touches = {
		onTouchStart(e){
			let {pageX,pageY} = e.changedTouches[0]
			touchPage.x = pageX
			touchPage.y = pageY
		},
		onTouchEnd(e){
			let {pageX,pageY} = e.changedTouches[0]
			if (Math.abs(touchPage.x-pageX)<5&&Math.abs(touchPage.y-pageY)<5) {
				clicked()					
			}
		}
	}
	return (
		<div className='Introduction'>
			<a href="/#" className="head" {...touches}><img src={require("common/image/swiper1.jpg")} alt="" /></a>
			<p className="detail">{mock('@cparagraph')}</p>
		</div>
	)
}