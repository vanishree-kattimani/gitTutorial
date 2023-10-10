//const http =require('http')

//const route=require('./routes')
//console.log(route.someText);
//console.log('vanishree');
//console.log("testing Nodemon");
///const server = http.createServer(route.handler);
//server.listen(3000);




const express= require('express');
const apps=express();
const bodyParser=require('body-parser')


//const loginRoutes=require("./routes/login");
//const homeRoutes=require('./routes/home');
const homeRoutes=require('./routes/grpchatapl');


apps.use(bodyParser.urlencoded());
apps.use(loginRoutes);





























apps.use(homeRoutes);









app.listen(4000);