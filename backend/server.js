import path from "path"
import express from 'express'
import dotenv from 'dotenv'
import { connectToMongoDB } from './db/connect.mongodb.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import router from './routes/index.js'
import {app,server} from './socket/socket.js'


const PORT = process.env.PORT || 8080;

const __dirname = path.resolve()

dotenv.config()
app.use(cors({ credentials: true, origin: true }))
app.use(express.json())
app.use(cookieParser())

app.use(router)


app.use(express.static(path.join(__dirname,'/frontend/dist')))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'frontend' ,'dist','index.html'))
})


server.listen(PORT, ()=>{
     connectToMongoDB()
    console.log('server listening on port '+PORT)
})