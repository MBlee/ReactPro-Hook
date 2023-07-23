import http from './http'
import {LOGIN,LOGOUT} from '../constants'
export function loginAction(data){
	return {type:LOGIN,user:data.user}
}
export function logoutAction(){
	return {type:LOGOUT,user:''}
}
export function loginAsync(data){
	return function(dispatch){
		return http.post('/login',{
			params:data
		}).then(res=>{
			dispatch(loginAction(data))
			return data
		})
	}
}