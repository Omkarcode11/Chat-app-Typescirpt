import Conversation from "../model/Conversation.js";
import Message from "../model/Message.js";
import { ResponseClass } from "../utils/Classes.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user._id;

   let conversation =  await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
    if(!conversation){
        conversation = await Conversation.create({ participants:[senderId, receiverId] })
    }

    const newMessage = await Message.create({ senderId,receiverId,message })
    
    if(newMessage){
        conversation.messages.push(newMessage._id)
        await conversation.save()
    }

    res.status(200).send(new ResponseClass(newMessage,true))

  } catch (err) {
    return res.status(500).send(new ResponseClass(err.message, false));
  }
};


export const getMessage = async(req,res)=>{
  try {
    const  receiverId  = req.params.id;
    const senderId = String(req.user._id);
    console.log(receiverId,senderId)
    let conversation =  await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId] ,
      },
    }).populate({ path: 'messages', options: { strictPopulate: false } });

    if(!conversation){
      return res.status(400).send(new ResponseClass('conversation not found',false)).exec()
    }

    return res.status(200).send(new ResponseClass(conversation.messages,true))

  }catch(err){
    return res.status(500).send(new ResponseClass(err.message, false))
  }
}