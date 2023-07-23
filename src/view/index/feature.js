import React from 'react'
import "common/css/feature.css"
export default function Feature(props) {
	const {title,featureList} = props.data
	return (
		<div className="Feature">
			<h2>{title}</h2>
			<ul>
				{
					featureList.map((feature,index)=>{
						return <li key={index}>
							<img src={feature.icon} alt="" />
							<p>{feature.detail}</p>
						</li>
					})
				}
			</ul>
		</div>
	)
}