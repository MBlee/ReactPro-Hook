import {Route,Switch} from 'react-router-dom'

import routes from './routes'
function IndexRoute(){
	return (
		<div>
			<Switch>
				{
					routes.map((route,index)=>{
						return (<Route {...route} key={index} />)
					})
				}
			</Switch>
		</div>
	)
}
export default IndexRoute
