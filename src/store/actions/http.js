import axios from 'axios'
import qs from 'qs'

const http = axios.create({
	baseURL:'/lee',
	withCredentials:true,
	tranformRequest(data){
		return qs.stringfy(data)
	}
})

export default http