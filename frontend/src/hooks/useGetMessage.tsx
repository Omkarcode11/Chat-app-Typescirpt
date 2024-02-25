import  { useState } from "react";
import useConversationContext from "../store/zustand";
import { messages } from "../utils/Interfaces";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constants";

interface resMessage {
  data: messages[];
  status: boolean;
  message: string;
}

interface getMessage {
    loading :boolean
    getMessages:()=>void
}

export default function useGetMessage():getMessage {
  const [loading, setLoading] = useState<boolean>(false);
  const { selectedConversation, setMessages } =
    useConversationContext();

  const getMessages = async () => {
    try {
      setLoading(true);

      let data = await fetch(
        `${BASE_URL}message/get/${selectedConversation?._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          redirect: "follow",
        }
      );

      let res:resMessage= await data.json();
      setLoading(false);
      if (res.status) {
        setMessages([...res.data]);
      } else {
        setMessages([]);
      }
    } catch (err) {
      console.log(err);
      toast.error("Not Getting Message Server Error");
    } finally {
      setLoading(false);
    }
  };

  return {loading,getMessages}
}
