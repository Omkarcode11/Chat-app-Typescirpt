import {Server} from 'socket.io'
import express from 'express';
import * as http from 'http';


const app = express()

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
     origin:["http://localhost:3000"],
     methods:["GET","POST"]
}})


const userSocketMap = new Map()

export function getReceiverSocketId(recId){
    return userSocketMap.get(recId)

}


io.on('connection',(socket)=>{
    console.log('user connected ',socket.id)

    const userId = socket.handshake.query.userId   
     if(userId){
        userSocketMap.set(userId,socket.id)
     }

     io.emit("onlineUsers",[...userSocketMap.keys()])
     
     
     socket.on("disconnect",()=>{
         console.log('user disconnected now',socket.id)
         if(userId){
             userSocketMap.delete(userId)   
             io.emit("onlineUsers",[...userSocketMap.keys()])
            }
    })
})

export { app,io,server}