import jwt from 'jsonwebtoken'

export const generateToken = (data,res)=>{

   const token = jwt.sign({data},process.env.JWT_KEY,{expiresIn:"1h"})

   res.cookie("jwt",token,{
    maxAge:15 * 24 *60 * 60 *100,
    httpOnly:true,
    sameSite:"strict"
   })
}