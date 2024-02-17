import express from 'express'
import dotenv from 'dotenv'
import { connectToMongoDB } from './db/connect.mongodb.js'
import cookieParser from 'cookie-parser'
import router from './routes/index.js'

let app = express()
const PORT = process.env.PORT || 8080;

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use(router)



app.listen(PORT,()=>{
    connectToMongoDB()
    console.log('server listening on port '+PORT)
})