import {GOODS,NO_GOODS} from '../constants'
import {mock} from 'mockjs'
export const goods =(user)=>{
	return (dispatch)=>{
		return new Promise((res)=>{
			setTimeout(()=>{
				dispatch({
					type:GOODS,user
				})
				res(true)
			},1000)
		})
	}
}
export const no_goods =(user)=>{
	return (dispatch)=>{
		return new Promise((res)=>{
			setTimeout(()=>{
				dispatch({
					type:NO_GOODS,user
				})
				res(false)
			},1000)
		})
	}
}