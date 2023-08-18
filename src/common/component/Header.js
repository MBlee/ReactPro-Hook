import React,{memo} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {loginAsync,logoutAction,loginAction} from 'store/actions'
import 'common/font/iconfont.css'

function Header(props) {
	const history = useHistory()
	const login = ()=>{
		// props.dispatch(loginAsync({user:'lee'}));
	}
	const logout = ()=>{
		// props.dispatch(logoutAction());
	}
	return (
		<div className='header'>
			<nav className='nav'>
				<a href='/#' onClick={
					e=>{
						e.preventDefault()
						props.show()
					}
				}><i className="iconfont icon-a-rightindentation"></i></a>
			</nav>
			<h1 className='title'>lee.com</h1>
			<a className='user' href="/#" onClick={
				(e)=>{
					e.preventDefault()
					history.push('/Login')
					props.dispatch(loginAction({user:''}))
				}
			}>{props.login.user?props.login.user:<i className="iconfont icon-icon-user-fill "></i>}
			</a>
		</div>
	)
}

export default memo(connect(res=>res)(Header))