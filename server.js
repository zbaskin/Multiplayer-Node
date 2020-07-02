const express = require('express');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

const Session = require('./SessionObject').Session;

const port = process.env.PORT || 8000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    });
}

server.listen(port);
