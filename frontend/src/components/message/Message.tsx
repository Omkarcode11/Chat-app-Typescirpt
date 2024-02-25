import React from "react";

interface messageComponentProps {
  side : string,
  message:string,
  time:string 
}

const Message: React.FC<messageComponentProps> = ({side,message,time}) => {


    
  return (
    <div className={`chat ${side=='end'?"chat-end":'chat-start'}`}>
      <div className={`chat-bubble text-white ${side=='end'?"bg-blue-500":"bg-gray-700"}`}>{message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{time}</div>
    </div>
  );
};

export default Message;
