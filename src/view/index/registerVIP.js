import React from 'react'
import "common/css/registerVIP.css"
export default function RegisterVIP(props) {
	const {title,detail,price} = props.data
	return (
		<article className="RegisterVIP">
			<h2>注册{title}VIP</h2>
			{detail.map((dl,index)=>{
				return <p key={index}>{dl}</p>
			})}
			<strong>仅需￥{price}</strong>
			<a href="https://www.baidu.com/index.htm">立即报名</a>
		</article>
	)
}