import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginAction} from 'store/actions'
import {useBack} from 'hook'
import 'css/login.css'
function Login(props) {
  const [toLogin, setToLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [userpwd, setUserPwd] = useState('')
  const [userpwd1, setUserPwd1] = useState('')
  const history = useHistory()
  const back = useBack(history)
  const toLink = (b)=>{
  	setToLogin(b)
  }

  const login = ()=>{
  	if(username == 'lee' && userpwd == '123'){
  		props.dispatch(loginAction({user:username}))
  		back()
  	}else{
  		console.log('密码错误');
  	}
  }
  return (
    <div className="loginPage">
    	<a className='back' href="/#" onClick={
    		(e)=>{
    			e.preventDefault()
    			back()
    		}
    	}>☜</a>
			<div className="loginBox" style={{display:toLogin?'grid':'none'}}>
				<h2 className='loginTitle'>用户登录</h2>
				<p>
					<label htmlFor="user" className="lab">☻</label>
					<input value={username} 
						onChange={(e)=>{
							setUsername(e.target.value)
						}} id='user' className="input" type="text" placeholder='请输入用户名'/>
				</p>
				<p>
					<label htmlFor="pwd" className="lab">◐</label>
					<input value={userpwd} 
						onChange={(e)=>{
							setUserPwd(e.target.value)
						}} id='pwd' className="input" type="password" placeholder='请输入密码'/>
				</p>
				<button className='loginBtn' onClick={login}>立即登录</button>
				<div className='link'>
					<span>没有账号？</span><a href="/#" onClick={(e) => {
				      e.preventDefault()
				      toLink(false)
				    }}>立即注册</a>
				</div>
			</div>
			<div className="registBox" style={{display:toLogin?'none':'grid'}}>
				<h2 className='loginTitle'>用户注册</h2>
				<p>
					<label htmlFor="user1" className="lab">☻</label>
					<input value={username} 
						onChange={(e)=>{
							setUsername(e.target.value)
						}} id='user1' className="input" type="text" placeholder='请输入用户名'/>
				</p>
				<p>
					<label htmlFor="pwd1" className="lab">◐</label>
					<input value={userpwd} 
						onChange={(e)=>{
							setUserPwd(e.target.value)
						}} id='pwd1' className="input" type="password" placeholder='请输入密码'/>
				</p>
				<p>
					<label htmlFor="pwd2" className="lab">◐</label>
					<input value={userpwd1} 
						onChange={(e)=>{
							setUserPwd1(e.target.value)
						}} id='pwd2' className="input" type="password" placeholder='请确认密码'/>
				</p>
				<button className='loginBtn'>立即注册</button>
				<div className='link'>
					<span>已有账号？</span>
					<a href="/#"
				    onClick={
					    (e) => {
					      e.preventDefault()
					      toLink(true)
					    }
				    }>去登陆</a>
				</div>
			</div>
	</div>
  )
}

export default connect(res=>res)(Login)