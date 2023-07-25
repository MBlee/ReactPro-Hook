import React from 'react'
import { useHistory } from 'react-router-dom';
import {navLinks} from 'router/routes'
export default function Menu(props) {
	const history = useHistory()
	return (
		<div className='menu'>
			{
				navLinks.map((item,index)=>{
					return (
						<a href='/#' key={index} onClick={
							e=>{
								e.preventDefault()
								history.push(item.path)
								props.show()
							}
						} className='menu-list'>{item.name}</a>)
				})
			}
		</div>
	)
}