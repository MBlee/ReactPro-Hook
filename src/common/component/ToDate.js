
import React from 'react'

export default function ToDate({date}) {
	let now = new Date()
	let pre = new Date(date)
	let nowTime = now.getTime()
	let preTime = pre.getTime()
	let dif = nowTime - preTime
	if (dif < 60000) {
		return '刚刚'
	}else if(dif < 3600000){
		return parseInt(dif/60000) + '分钟之前'
	}else if(dif < 86400000){
		return parseInt(dif/3600000) + '小时之前'
	}else if(dif < 604800000){
		return parseInt(dif/86400000) + '天之前'
	}
	return pre.toLocaleDateString()
}