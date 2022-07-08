const express = require('express');//we cant use import, cause we arent in react and in node.js we do it like this 
const socketio = require('socket.io');
const cors = require('cors');
const http = require('http');
const {addUser, removeUser, getUser, getUserInRoom} = require('./users.js');

const PORT = process.env.PORT || 5000;
const router = require('./router');
const app = express();
const server = http.createServer(app);
const io = socketio(server, {cors: {
    origin: "*",
}});
app.use(cors());

io.on('connection', (socket)=>{ //registen client joining and client leaving, we are managing this particular socket that just connected
    console.log("new");

    socket.on('join', ({name ,room}, callback) => {
        const {error, user} = addUser({id: socket.id, name, room});

        
        if(error) return callback(error);

        socket.emit('message', {user: 'admin', text:`${user.name}, welcome to the room ${user.room}`});//emitted the event from backend to front end
        socket.broadcast.to(user.room).emit('message',{user:'admin', text:`${user.name}, has joined`});


        socket.join(user.room);
        io.to(user.room).emit('roomData', {room: user.room, users: getUserInRoom(user.room)})

        callback();
    });


    socket.on('sendMessage', (message, callback)=>{
        const user = getUser(socket.id);

        io.to(user?.room).emit('message', {user: user.name, text: message});
        callback();
    })// we are expecting an event from the front end

    // return () => {
    //     socket.emit();
    // }

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left the chat `});
            io.to(user.room).emit('roomData', {room: user.room, users: getUserInRoom(user.room)})
        }
    })
})

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));


