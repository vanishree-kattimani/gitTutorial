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

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);