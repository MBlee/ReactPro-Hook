import {LOGIN,LOGOUT} from '../constants'

function reducer(state={user:''},action){
	switch(action.type) {
		case LOGIN:
			const {user}=action
			return {...state,user}
			break;
		case LOGOUT:
			return {...state,user:''}
			break;
		default :
			return state
			break;
	}
}

export default reducer