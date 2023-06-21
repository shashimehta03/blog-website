const express = require('express');

const app = express();
const PORT = 3000;
app.use(express.static('public'));

app.get('/', (req, res)=>{
	res.status(200);
	res.send("Welcome to root URL of Server");
});
app.get('/blog',(req,res)=>{
    // res.render(index.html);
    // res.set('Content-Type', 'text/css');
    res.sendFile(__dirname + '/index.html'+'/readmore.html');
	
});
app.get('/readmore',(req,res)=>{
    // res.render(index.html);
    // res.set('Content-Type', 'text/css');
    res.sendFile(__dirname + '/readmore.html');
});


app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);


// var express = require("express")
// var bodyParser = require("body-parser")
// var mongoose = require("mongoose")

// const app = express()
// app.get("/",(req,res)=>{
//     res.render("index.html")
// }).listen(3000)

// console.log("Listing on PORT 3000")