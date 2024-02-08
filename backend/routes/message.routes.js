import express from 'express'
import { getMessage, sendMessage } from '../controllers/message.controllers.js'
import jwtAuthentication from '../middleware/jwtAuthentication.js'

let messageRoute = express.Router()

messageRoute.post('/send/:id',jwtAuthentication,sendMessage)
messageRoute.get('/get/:id',jwtAuthentication,getMessage)


export default messageRoute