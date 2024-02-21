import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

interface messageContainer {
  firstName: string;
  lastName: string;
  profilePic: string;
}

const MessageContainer: React.FC<messageContainer> = ({
  firstName,
  lastName,
  profilePic,
}) => {




  return (
    <div className='md:min-w-[450px] flex flex-col'>
      <>
        <div className='bg-slate-500 px-4 py-2 mb-2 flex flex-row align-middle'>
          <span className='label-text mr-2'>
            <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
                <img
                  src={profilePic}
                  alt='Avatar Img'
                />
              </div>
            </div>
          </span>
          <span className='text-gray-900 font-bold pl-2'>{`${firstName} ${lastName}`}</span>
        </div>

        <Messages />
        <MessageInput />
      </>
    </div>
  );
};

export default MessageContainer;
