//const http =require('http')

//const route=require('./routes')
//console.log(route.someText);
//console.log('vanishree');
//console.log("testing Nodemon");
///const server = http.createServer(route.handler);
//server.listen(3000);

const express =require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('In the middleware!');
    next();
});
app.use((req,res,next)=>{
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
