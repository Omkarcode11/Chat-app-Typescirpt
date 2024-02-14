import express from 'express'
import dotenv from 'dotenv'
import authRoute from "./routes/auth.routes.js"
import { connectToMongoDB } from './db/connect.mongodb.js'

dotenv.config()

let app = express()
const PORT = process.env.PORT || 8080;
app.use(authRoute)


app.listen(PORT,()=>{
    connectToMongoDB()
    console.log('server listening on port '+PORT)
})