import mongoose from 'mongoose'

export const connectToMongoDB  =  async()=>{
    try{
      await mongoose.connect(process.env.DB_URL)
      console.log('Connected to MongoDB')

    }catch(err){
        
        console.log("Error during the db connection ",err)
    }
}