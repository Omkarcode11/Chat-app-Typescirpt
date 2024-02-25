import { useState } from "react";
import useConversationContext from "../store/zustand";
import toast from "react-hot-toast";
import { messages } from "../utils/Interfaces";
import { BASE_URL } from "../utils/constants";

interface sendMessage {
  loading: boolean;
  sendMessage: (message: string) => void;
}

interface resSendMsg {
  data:messages,
  message:string,
  status:boolean
}

const useSendMessage = (): sendMessage => {
  const [loading, setLoading] = useState<boolean>(false);
  const { messages, setMessages, selectedConversation } =
    useConversationContext();

  const sendMessage = async (message: string) => {
    try {
      setLoading(true);
     
      let data = await fetch(
        `${BASE_URL}/message/send/${selectedConversation?._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          credentials: "include",
          body: JSON.stringify({message}),
        }
      );

      let res:resSendMsg = await data.json();
      if (res.status) {
        setMessages([...messages, res.data]);
      } else {
        toast.error("Fail to send message");
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
