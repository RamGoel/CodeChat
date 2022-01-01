const http=require('http');
const express=require('express');
const path=require('path');
const mongo=require('mongoose');
const socketio=require('socket.io');
const formidable=require('formidable');
const app=express();
const port=process.env.PORT||3000;


app.set('view engine','ejs');
app.use(express.static(__dirname+'views'));
app.use(express.static(__dirname+'/assets/bootstrap'));
app.use(express.static(__dirname+'/assets/css'));
app.use(express.static(__dirname+'/assets/img'));
app.use(express.static(__dirname+'/assets/js'));
app.use(express.static(__dirname+'/assets/fonts'));


app.get('/', (req,res)=>{
    res.render('index');
})


app.get('/login',(req,res)=>{
    res.render('login')
})


//POST Endpoints

app.post("/loginPost",(req,res)=>{
    res.render('dash');
})



app.listen(port,(req,res)=>{
    console.log(`App is listening on port ${port}`)
})


