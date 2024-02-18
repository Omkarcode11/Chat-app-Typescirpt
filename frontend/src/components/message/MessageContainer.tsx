import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer:React.FC = ()=> {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        <>
        <div className='bg-slate-500 px-4 py-2 mb-2 '> 
          <span className='label-text mr-2'>To</span><span className='text-gray-900 font-bold'>Omkar</span>

        </div>
        
        <Messages/>
        <MessageInput />
        </>

        
    </div>
  )
}

export default MessageContainer