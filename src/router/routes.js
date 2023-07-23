import Index from '../view/index'
import Login from '../view/login'
import Course from '../view/course'
import Lecture from '../view/lecture'
import Work from '../view/work'

const routes = [
	{name:'首页',path:'/',exact:true,render(){ return <Index /> }},
	{name:'首页',path:'/Index',exact:false,render(){ return <Index /> }},
	{name:'登录',path:'/Login',exact:false,render(){ return <Login /> }},
	{name:'课程',path:'/Course',exact:false,render(){ return <Course /> }},
	{name:'讲师',path:'/Lecture',exact:false,render(){ return <Lecture /> }},
	{name:'工作',path:'/Work',exact:false,render(){ return <Work /> }}

]
export const navLinks = [
	{name:'首页',path:'/Index'},
	{name:'课程安排',path:'/Course'},
	{name:'讲师团队',path:'/Lecture'},

]
export default routes
