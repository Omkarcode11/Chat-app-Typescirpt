import express from 'express'
import { getUserById ,getAllUser} from '../controllers/user.controllers.js'
import jwtAuthentication from '../middleware/jwtAuthentication.js'


const userRoute = express.Router()

userRoute.get("/getUser/:id",getUserById)
userRoute.get("/" ,jwtAuthentication,getAllUser)


export default userRoute