import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import getRandomEmojis from "../utils/emojis";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

interface conversationReturn {
  loading: boolean;
  conversation: User[];
}

interface responseConversation {
  message: string;
  status: boolean;
  data: any;
  
}

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  gender: string;
  profilePic: string;
  emoji:string;
}



const useConversationState = (): conversationReturn => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<User[]>([]);

  async function getConversation() {
    try {
      let data= await fetch(BASE_URL+"user",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: 'follow',
        credentials: 'include', // Don't forget to specify this if you need cookies
      }
      )
      let resData:responseConversation  = await data.json()
      if(resData.status==false){
          navigate("/login")
          toast.error("Session expired")
           
      }  
      let users:User[] = resData.data
      toast.success("Success to get Conversations");
      for(let user of users)user.emoji = getRandomEmojis()
      setConversation(users);
    } catch (err) {
      toast.error("Occur Error While Getting Conversation");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getConversation();
  }, []);

  return { loading, conversation };
};


export default useConversationState;