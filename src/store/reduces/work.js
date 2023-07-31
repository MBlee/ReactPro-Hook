import {WORKLOADING,WORKENDLOADING,WORKSET} from 'store/constants'

let sta = {data:{},isLoading:false}
export default function work(state=sta,action) {
	switch(action.type) {
		case WORKLOADING:
			state = {
				...state,isLoading:true
			} 
			return state
			break;
		case WORKENDLOADING:
			state = {
				...state,isLoading:false,data:action.data
			}
			return state
			break;
		case WORKSET:
			state = {
				data:{},isLoading:false
			}
			return state
			break;
	}
	return {...state} 
}