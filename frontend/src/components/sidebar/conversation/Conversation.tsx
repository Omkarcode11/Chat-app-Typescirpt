import React from "react";

const Conversation: React.FC = () => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-4 py-1 cursor-pointer'>
        <div className='avatar online h-10'>
          <div className='w-full rounded-full'>
            <img className="" src='https://avatar.iran.liara.run/public/boy?username=omkarsonawane' alt='avatar' />
          </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">Omkar Sonawane</p>
                <span className="text-xl">❤</span>
            </div>
        </div>
      </div>
      <div className="divider p-0 m-0 h-1"></div>
    </>
  );
};

export default Conversation;
