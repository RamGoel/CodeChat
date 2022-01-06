const http=require('http');
const express=require('express');
const path=require('path');
const mongo=require('mongoose');
const socketio=require('socket.io');
const formidable=require('formidable');
const app=express();
const bodyParser=require('body-parser');
const { NONAME } = require('dns');
const axios=require('axios');
const port=process.env.PORT||3000;


app.set('view engine','ejs');
app.use(express.static(__dirname+'views'));
app.use(express.static(__dirname+'/assets/bootstrap'));
app.use(express.static(__dirname+'/assets/css'));
app.use(express.static(__dirname+'/assets/img'));
app.use(express.static(__dirname+'/assets/js'));
app.use(express.static(__dirname+'/assets/fonts'));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.locals.userValue = null;
    next();
})
app.use(bodyParser.urlencoded({extended:true}));




//GET Endpoints
app.get('/', (req,res)=>{
    res.render('index');
})


app.get('/login',(req,res)=>{
    res.render('login',{teamName:null,userName:null})
})


app.get('/logout',(req,res)=>{
    res.redirect('/');
})

//POST Endpoints

app.post("/loginPost",(req,res)=>{

    console.log(req.body);
    var userName=req.body.userName;
    var teamName=req.body.teamName;

    if(userName.toLowerCase()=="ram"){
        if(teamName.toLowerCase()=="goeldevs"){

            res.render('dash',{code:"print('Hello World')",output:null});
        }
    }else{
        res.render('login',{userName:userName,teamName:teamName});
    }
})



app.post('/compile', (req, res) => {
  
    var codeInput=req.body.codeInput;
    var data = JSON.stringify({
      "code": codeInput,
      "language": "py",
      "input": ""
    });
  
    var config = {
      method: 'POST',
      url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
  
    axios(config)
      .then(function (response) {
        res.render('dash',{code:codeInput,output:response.data.output});
        console.log(response.data.output);
      })
      .catch(function (error) {
        console.log(error);
      });
  })


app.listen(port,(req,res)=>{
    console.log(`App is listening on port ${port}`)
})


