import User from "../model/User.js"
import { ResponseClass } from "../utils/Classes.js"

export const getAllUser = async (req,res)=>{
     let id = req.user._id
     let AllUsers = await User.find({_id:{$ne:id}}).select("-password")

     if(!AllUsers){
        return res.status(404).send(new ResponseClass("Users Not found",false))
     }

     return res.status(200).send(new ResponseClass(AllUsers,true))
}

export const getUserById = async(req,res)=>{
    try{

        let {id} = req.params
        
        let user = await User.findById(id).select("-password")
        if(!user){
            return res.status(404).send(new ResponseClass("User not found",false))
        }
        
        return res.status(200).send(new ResponseClass(user,true))
    }catch(err){
        return res.status(500).send(new ResponseClass(err.message,false))
    }
}