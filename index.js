const express = require('express');
const app = express();
const http = require('http');
require('dotenv').config()
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors:{
        origin:'*'
    }
});
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});



io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('push-object',function (){
        socket.emit('received-data','success-object')
    })
    socket.on('push-string',function (){
        socket.emit('received-data','success-string')
    })
});




server.listen(port, () => {
    console.log('listening on *:'+port);
});
