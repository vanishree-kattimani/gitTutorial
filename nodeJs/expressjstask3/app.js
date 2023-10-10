const express =require('express');
const bodyParser=require('body-parser');

const app=express();

const adminRoutes=require('./chatgroup/chat');
const shopRoutes=require('./chatgroup/login');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/chat',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);