export function useBack(history){
	return ()=>{
		if (history.length) {
			history.goBack()
		}else{
			history.push('/')
		}
	}
}
export function useInnerHeight(){
	return window.innerHeight
}