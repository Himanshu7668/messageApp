const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

const server = app.listen(8080);

const io = require('socket.io')(server);

io.on('connection', (socket)=>{
   console.log('Connected...');
   socket.on('message', (msg)=>{
      socket.broadcast.emit('message', msg)
   })
})

