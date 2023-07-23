import {combineReducers} from 'redux'

import {RENAME} from '../constants'
import login from './login'
import works from './works'
import scroll from './scroll'


function reducer(state={name:'lee'},action){
	switch(action.type) {
		case RENAME:
			const {name}=action
			return {...state,name}
			break;
		default :
			return state
			break;
	}
}
export default combineReducers({reducer,login,works,scroll})