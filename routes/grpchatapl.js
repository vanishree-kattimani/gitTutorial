/*
const express=require('express');
const fs=require('fs')
const app=express();
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=> {
fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err)
            data="No chat Exists"
        }
    
    res.send(`
        ${data}<html>
        <title>Chatapp</title>
<form  action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
<input type="text" name="message" id="message" placeHolder="message">
<input type="hidden" name="username" id="username">
<button type="submit">Send</button>
</form>
</html>`);
}) 

});

app.post("/",(req,res)=>{
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("username.text",`${req.body.username}:${req.body.message}`,{flag:'a'}, (err)=>
    err ? console.log(err) : res.redirect("/")
    );
});

app.get('/login',(req,res,next)=>{
   
    res.send(`<html>
    <title>Chattapp</title>  
    <h1 style="text-align: center;">ChattApp</h1>
<div class="container" style="margin-left: 100px;">
    <form action="/" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
         <label >Login</label><br>
         <input  id="username" type="text" value="username"><br>
         <button type="submit">login</button>
    </form>
</div>
           </html>`);
 
   
});

app.post('/',(req,res,next)=>{
    res.redirect('/')

})


app.listen(3000);*/

const express = require ("express");

const fs = require('fs');

const bodyParser = require ('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

var userName;
var textMessage;

app.get('/login' , (req,res, next) => {
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input type="text" id="username" name="username" placeholder="Enter Username"><button type="submit"> Send </button></form>');
})



app.post('/' , (req,res, next) => {
    userName=req.body.username;
    console.log(req.body);
    res.send('<form action="/messages" onsubmit = "document.getElementById("username").value = localStorage.getItem(`username`)" method="POST"><input type="text" name="Message" placeholder="Enter Your Message"><input type="hidden" id="username" name="title" placeholder="Enter Username"><button type="submit"> Send </button></form>');
})

app.post('/messages' , (req,res, next) => {
    textMessage = req.body.Message;
    fs.appendFileSync('data.txt' , `{${userName} :==> ${textMessage}}`);
    console.log(userName, ':', textMessage);
    // data.push(`{${userName} :==> ${textMessage}}`);
    var text = fs.readFileSync('data.txt' , 'utf8');
    console.log(text);
    res.redirect('/');
})

app.listen(3000);