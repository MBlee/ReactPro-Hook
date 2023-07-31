import {WORKLOADING,WORKENDLOADING,WORKSET} from '../constants'
import {mock} from 'mockjs'
export const workLoading =()=>{
	return (dispatch)=>{
		dispatch({
			type:WORKLOADING
		})
		return new Promise((res,rej)=>{
			setTimeout(()=>{
			const act = mock({
					"type":WORKENDLOADING,
					"data":{
						"title":'@ctitle',
						"content":'cparagraph',
						"commentsCount|10-100":1,
						"goodsCount|10-100":1,
						"image|2-5":["@image(200x200,@color)"]
					}
				})
				dispatch(act)
				res('详情加载完毕...')
			},1000)
		})
	}
}