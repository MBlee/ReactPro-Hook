// http://127.0.0.1:9000/name
// http://127.0.0.1:9000/login
// http://127.0.0.1:9000/crossorigin
// http://127.0.0.1:8080/ajax.html
const express = require('express')
const app = express()

app.get('/name',(req,res)=>{
	setTimeout(()=>{
		res.send('i am lee：'+ JSON.stringify(req.query))
	},1000)
})


app.post('/login',(req,res)=>{

	// console.log(req.body);
	res.send('login success:'+JSON.stringify(req.query))
})

app.listen(9000,()=>{
	console.log('sever start');
})