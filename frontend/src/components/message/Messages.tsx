import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import useConversationContext from "../../store/zustand";
import { messages } from "../../utils/Interfaces";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages: React.FC = () => {
  const { loading, getMessages } = useGetMessage();
  const { messages, selectedConversation } = useConversationContext();
  useListenMessages()


  const lastMessageRef = useRef<any>()
  useEffect(() => {
    getMessages();
  }, [selectedConversation]);

  useEffect(()=>{
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
      
    }, 100);
  },[messages])

  return (
    <>
    {loading==false && messages.length==0 && <p className="text-center">Send the message to start the conversation </p>}
      {loading ? (
        new Array(4).fill(0).map(( ) => <MessageSkeleton />)
      ) : (
        <div className='px-4 flex-1 overflow-auto'>
          {messages?.map((ele: messages) => (
            <div key={ele._id} ref={lastMessageRef}>
            <Message
              side={ele.senderId == selectedConversation?._id ? "start" : "end"}
              message={ele.message}
              time={new Date(ele.createdAt).toLocaleTimeString()}
              />
              </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Messages;
