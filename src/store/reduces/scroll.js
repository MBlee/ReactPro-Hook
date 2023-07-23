const sta = {
	indexCoords:{x:0,y:0}
}
export default function scroll(state=sta,action) {
	switch(action.type) {
		case "INDEXCOORDS":
			state = {
				...state,indexCoords:action.indexCoords
			} 
			return state
			break;
	}
	return {...state} 
}