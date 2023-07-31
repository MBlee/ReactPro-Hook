import {COMMENT_LOADING,COMMENT_ADD,COMMENT_UPDATE,COMMENT_ENDING,COMMENT_RESET} from 'store/constants'

const sta = {
	commentList:[],
	isLoading:false,
	isEnding:false
}
function reducer(state = sta,action){

	switch(action.type) {
		case COMMENT_LOADING:
			return {...state,isLoading:true}	
			break;
		case COMMENT_UPDATE:
			return {...state,isLoading:false,commentList:state.commentList.concat(action.commentList)}
			break;
		case COMMENT_ADD:
			return {...state,isLoading:false,commentList:[action.data,...state.commentList]}
			break;
		case COMMENT_ENDING:
			return {...state,isEnding:true}	
			break;
		case COMMENT_RESET:
			return {...sta}
			break;
	}
	return {...state}
}
export default reducer