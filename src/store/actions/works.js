import {LOADING,ENDLOADING,UPDATE} from '../constants'
import {mock} from 'mockjs'
export const loading =()=>{
	return (dispatch)=>{
		dispatch({
			type:LOADING
		})
		return new Promise((res,rej)=>{
			setTimeout(()=>{
			const act = mock({
					"type":UPDATE,
					"data|2-4":[
						{
							"name":"@ctitle",
							"commentsCount|10-100":1,
							"goodsCount|10-100":1,
							"image":"@image(200x200)"
						}
					]
				})
				dispatch(act)
				res(act)
			},2000)
		})
	}
}