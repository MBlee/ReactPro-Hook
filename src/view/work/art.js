import 'common/css/art.css'

import React,{useState,useEffect} from 'react'
import {mock} from 'mockjs'


export default function Art() {
	const [list, setList] = useState('')
	useEffect(() => {
		const imageSrc = require(`common/image/swiper${mock('@integer(1,5)')}.jpg`)
		console.log();
		let h = mock({
			's':'<p>@csentence(10,30) </p>',
			'hp':'<h3>@ctitle(8,10) </h3><p>@cparagraph(10,20) </p>',
			'hImg':`<h3>@ctitle(5,10) </h3><img src="${imageSrc}" alt=""/>`
		})
		setList(mock({
			'list|1-3':[h.hp,h.hImg,h.s]
		}).list.join(''))

	}, [])
	return (
		<div className="Art">
			<article dangerouslySetInnerHTML={{
				__html:list
			}}></article>
		</div>
	)
}