import {LOADING,UPDATE,ENDLOADING} from 'store/constants'

let sta = {data:[],isLoading:false,loadingEnd:false}
export default function works(state=sta,action) {
	switch(action.type) {
		case LOADING:
			state = {
				...state,isLoading:true
			} 
			return state
			break;
		case UPDATE:
			const d = state.data.concat(action.data)
			state = {
				...state,isLoading:false,data:d
			}
			return state
			break;
		case ENDLOADING:
			state = {
				...state,isLoading:false,loadingEnd:true
			}
			return state
			break;
	}
	return {...state} 
}