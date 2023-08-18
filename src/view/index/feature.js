import React,{memo} from 'react'
import "common/css/feature.css"
function Feature(props) {
	if (!props.data) return ''
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
export default memo(Feature)