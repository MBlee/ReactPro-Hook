import React,{memo} from 'react'
import "common/css/signUp.css"
function SignUp(props) {
	const {pTitle,pDetail,price} = props.data
	const colors1 = [
		'#7A9D54','#7C9D96','#75C2F6','#A076F9','#FF52A2','#35A29F','#3F2E3E','#EF6262'
	]
	const colors2 = [
		'#A1CCD1','#E9B384','#FBEEAC','#D4E2D4','#D7BBF5','#FFB07F','#F8FDCF','#FAF0D7'
	]

	const randomColor = (colors)=>{
		return colors[Math.floor(Math.random()*8)]
	}
	const majorColor = randomColor(colors1)
	return (
		<div className="SignUp">
			<div className="signMain" style={{backgroundColor:majorColor}} onTouchStart={(e)=>{
				e.currentTarget.style.opacity=0.8
			}} onTouchEnd={(e)=>{
				e.currentTarget.style.opacity=1
			}}>
				<p className="title">{pTitle}</p>
				<p style={{color:majorColor}} className="price">{price?"￥"+price:"FREE"}</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={randomColor(colors2)} fillOpacity="1" d="M0,256L80,224C160,192,320,128,480,128C640,128,800,192,960,181.3C1120,171,1280,85,1360,42.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
			</div>
			<p className="detail">{pDetail}</p>
			<a className="signBtn"  href="https://www.baidu.com/index.htm" onClick={()=>{
				console.log("baidu");
			}}>报名</a>

		</div>
	)
}
export default memo(SignUp)