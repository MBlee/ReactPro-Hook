import {COMMENT_LOADING,COMMENT_ADD,COMMENT_UPDATE,COMMENT_ENDING,COMMENT_RESET} from 'store/constants'
import {mock} from 'mockjs'
import store from 'store'
export const loadingComment = ()=>{
	return (dispatch)=>{
		dispatch({
			type:COMMENT_LOADING
		})
		return new Promise((res)=>{
			setTimeout(()=>{
				const commentList = mock({
					"commentList|2-5":[{
						"head":"@image(50x50,@color)",
						"username":"@cname",
						"content":"@csentence",
						"date":"@datetime"
					}]
				}).commentList
				commentList.forEach((item,index)=>{
					const child = mock({
						"child|2-5":[{
							"head":"@image(50x50,@color)",
							"username":"@cname",
							"content":"@csentence",
							"date":"@datetime"
						}]
					}).child
					item.children = child
				})
				dispatch({
					type:COMMENT_UPDATE,
					commentList
				})
				const count = store.getState().comment.commentList.length
				if (count>10) {
					dispatch({
						type:COMMENT_ENDING
					})
					res(false)
				}else{
					res(true)
				}
			},1000)
		})
	}
}
export const addComment = (data)=>{
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch({
				type:COMMENT_ADD,
				data:data
			})
		},1000)
	}
}