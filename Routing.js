//const http =require('http')

//const route=require('./routes')
//console.log(route.someText);
//console.log('vanishree');
//console.log("testing Nodemon");
///const server = http.createServer(route.handler);
//server.listen(3000);

const express =require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req,res,next)=>{
   // console.log('In the middleware!');
   res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="product size"><button type="submit">Add product</button></form>')
    
});
app.post('/product',(req,res,next)=>{
    console.log('req.body');
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
