import 'common/css/footer.css'
import React from 'react'
import {mock} from 'mockjs'
export default function Footer() {
	const navs = mock({
		'navs|5-8':['@ctitle(4)']
	}).navs
	const email = mock('@email')
	const tel = mock(/^1[3-9]\d{9}$/)
	return (
		<footer className="Footer">
			<p className='contact'>
				<i>✉ {email}</i>
				<i>☏ {tel}</i>
			</p>
			<nav>
				{
					navs.map((nav,index)=>{
						return (
							<a key={index} href="www.baidu.com">{nav}</a>
						)
					})
				}
			</nav>
			<p className='record'>京备{mock('@region@url')}版权所有</p>
		</footer>
	)
}