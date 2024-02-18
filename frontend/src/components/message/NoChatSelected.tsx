import React from 'react'
import { TbMessages } from "react-icons/tb";

const NoChatSelected:React.FC = ()=> {
  return (
    <div className='flex items-center justify-center h-full w-full'>
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>Wellcome 👏 Omkar</p>
           <p>select a chat to start a messaging</p>
           <TbMessages className='text-3xl md:text-6xl text-center' />

        </div>


        
    </div>
  )
}

export default NoChatSelected