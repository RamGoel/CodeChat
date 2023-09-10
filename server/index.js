//Importing Node Modules
const bodyParser = require('body-parser');
const express = require('express');
const res = require('express/lib/response');
const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io');
const io = socketio(server);
const axios=require('axios')
const path = require('path');
const port = process.env.PORT || 8000;
const request = require('request')
const cors = require('cors')
app.use(cors())


//Telling Server to Access these Folders
app.use(express.static(__dirname + '/assets/js'))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/assets/css'))
app.use(express.static(__dirname + '/assets/images'))
app.use(express.static(__dirname + '/assets/audio'))

//Enabling Body Parser
app.use(bodyParser())

//setting View engine to Embedded JavaScript (EJS) (Google for it if you want to learn More)
app.set('view engine', 'ejs')


//Array for Users
var userArray = []


//Serving Login Page
app.get('/', (req, res) => {

    res.render('index',{nameValue:null,validError:null,roomValue:null})

})


app.get('/:roomName',(req,res)=>{
    var room=String(req.params.roomName)
    res.render('index',{nameValue:null,validError:null,roomValue:room})
})

//Handling Login of User
app.post('/login', (req, res) => {
    const nameOfUser = req.body.userName;
    const nameOfRoom = req.body.roomName;


        res.json({
            inviteLink:`/${nameOfRoom}`
        })



})



//SocketIO Connections
io.on("connection", socket => {

    
    //Client EMits Joined Event on Joining
    socket.on('joined', data => {

        

        //Logging Join Message to Server 
        console.log(data.username+" Connected in "+data.roomName)


        //Creating Object of User Details
        var newUser = {
            id: socket.id,
            name: data.username,
            roomName:data.roomName
        };


        //Adding User to Array
        userArray.push(newUser)

        //Joining Socket to Room
        socket.join(data.roomName)
        
        console.log(userArray)

        // //Getting Users of Joined User's Room
        // var roomUsers=userArray.filter(item=>{
        //     return item.roomName == data.roomName;
        // })


        // //Emitting Users List to All Group Members
        // io.to(data.roomName).emit('memberListRender',roomUsers);

        //Getting a Date
        const date = new Date()

        //Emitting User Joined Message to Other Group Members
        socket.to(data.roomName).emit('userMessageRender', {
            message: `${data.username} joined the chat`,
            time: `${date.getHours()}:${date.getMinutes()}`,
            sender: "Admin",
            pos:"left"
        })

        console.log("CheckPOinyt")

        //Emitting Welcome Message to User
        socket.emit('userMessageRender', {
            message: "Welcome to chat",
            time: `${date.getHours()}:${date.getMinutes()}`,
            sender: "Admin",
            pos:"left"
        })

        //Above Code Executes when new User Joins.
    })


    //When User Clicks Send Button then Client Sends this Event
    socket.on('userMessage', (data) => {

        //Getting Time
        const date = new Date()

        //Identifying User From Array
        var senderUser = userArray.find(item => {
            return item.id == socket.id
        })

        var collection=userArray.filter(item=>{
            return item.id!=socket
        })
        //Sending Message to all Group Members
        io.to(data.roomName).emit('userMessageRender', {
            message: data.message,
            sender: senderUser.name,
            time: `${date.getHours()}:${date.getMinutes()}`,
            pos:"left"
        })

        //Above Code Executes when user Send Message
    })


    socket.on('codeWritten',(data)=>{

        var dataSend = {
            script : data.code,
            language: data.language,
            versionIndex:0,
            clientId: "ed4e43f3d62e39ecd556a8e2c48d470f",
            clientSecret:"78cb7b9e32c1ae4e09a1e0bbbef278ad374623e7d8866d48279a48ac42e92c14"
          };
      
          console.log(dataSend)
        // var config = {
        //   method: 'POST',
        //   url: 'https://api.jdoodle.com/v1/execute',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   json: dataSend
        // };
        request({
            url: 'https://api.jdoodle.com/v1/execute',
            method: "POST",
            json: dataSend
        },

        function (error, response, body) {
            console.log('error:', error);
            socket.emit("codeCompiled",response.body.output);
        console.log('body:', body);
        })
        // axios(config)
        //   .then(function (response) {
        //     console.log(response.data.output);
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //     res.redirect('/loginPost')
        //   });
    })
    socket.on('checkEmotion',async(data)=>{
        const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("text", data.text);

const options = {
  method: 'POST',
  url: 'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com',
    'X-RapidAPI-Key': '710d6e061dmsh98b84ba69026524p1b8a91jsnc9f00a492a48'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    })

    //Emits when User Leaves Chat
    socket.on('disconnect',()=>{

        //Getting Time
        const date = new Date()

        
        //Getting Details of Leaved User
        var userLeave = userArray.find(item => {
            return item.id == socket.id;
        })
        
        //Logging Disconnect Message to Server
        console.log(userLeave.name+ "disconnected")

        //Sending User Leaved Message to All Users
        socket.to(userLeave.roomName).emit('userMessageRender',{
            sender:"Admin",
            message:userLeave.name+` leaved the chat!`,
            time:`${date.getHours()}:${date.getMinutes()}`
        })

         //Removing User from Array
         userArray.pop(userLeave);

         //Checking How many User Remains
         console.log(userArray)

        // //Getting Users of Joined User's Room
        // var roomUsersDel=userArray.filter(item=>{
        //     return item.roomName == data.roomName;
        // })


        // //Emitting Users List to All Group Members
        // io.to(data.roomName).emit('memberListRender',roomUsersDel);


       
    })


   


})





//Listening the Server on port 3000
server.listen(port, () => {
    console.log(`Running at port ${port}`)
})