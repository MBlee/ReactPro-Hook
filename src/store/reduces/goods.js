import {GOODS,NO_GOODS} from '../constants'

function reducer(state={user:'',goods:false},action){
	const {user}=action
	switch(action.type) {
		case GOODS:
			return {user,goods:true}
			break;
		case NO_GOODS:
			return {user,goods:false}
			break;
		default :
			return state
			break;
	}
}

export default reducer