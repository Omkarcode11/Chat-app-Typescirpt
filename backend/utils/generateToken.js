import jwt from 'jsonwebtoken'

export const generateToken = (data,res)=>{

   const token = jwt.sign({data},process.env.JWT_KEY,{expiresIn:"30d"})

   res.cookie("jwt",token,{
    maxAge:15 * 24 *60 * 60 *100,
    httpOnly:true,
    sameSite:"strict"
   })
}