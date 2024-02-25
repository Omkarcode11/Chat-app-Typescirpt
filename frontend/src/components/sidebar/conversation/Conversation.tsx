import React from "react";
import { conversationType } from "../../../utils/Interfaces";
import useConversationContext from "../../../store/zustand";
import { useSocketContext } from "../../../context/SocketContext";


const Conversation: React.FC<conversationType> = ({ firstName, lastName, profilePic, gender,_id ,emoji}) => {
  const { selectedConversation, setSelectedConversation } = useConversationContext();
  const {onlineUser} = useSocketContext()
  const isSelected:boolean = selectedConversation?._id == _id
  const isOnline  = onlineUser.includes(_id)
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-4 py-1 cursor-pointer ${isSelected ? 'bg-sky-500' :""}`}
       onClick={()=>setSelectedConversation({firstName, lastName, profilePic, gender,_id,emoji}
        )}
      >


        <div className={`avatar ${isOnline?"online":"offline"} h-10`}>
          <div className="w-full rounded-full">
            <img className="" src={profilePic} alt="avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{firstName} {lastName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      <div className="divider p-0 m-0 h-1"></div>
    </>
  );
};

export default Conversation;