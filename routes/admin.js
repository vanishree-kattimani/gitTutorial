const express=require('express');
const router=express.Router();


router.use('/admin/add-product', (req,res,next)=>{
  //router.get('/admin/add-product', (req,res,next)=>{
    // console.log('In the middleware!');
    req.send(
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
    ); 
 });
 router.post('/admin/product',(req,res,next)=>{
     console.log('req.body');
     res.redirect('/');
 });
 module.exports=router;