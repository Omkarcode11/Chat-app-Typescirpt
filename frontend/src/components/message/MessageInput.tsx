import React,{useState} from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput:React.FC =()=> {
  const [message,setMessage] = useState<string>()
  const {loading,sendMessage} = useSendMessage()

  async function sendMessageHandler(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(message)
    await sendMessage(message)
     setMessage("")
  }

  return (
    <form className='px-4 my-3' onSubmit={sendMessageHandler}>
        <div className='w-full relative'>
       <input type='text' placeholder='Type Message' value={message} onChange={(e)=>setMessage(e.target.value)} className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'/>
       <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
       {loading ? <div className="loading loading-spinner"></div>:
       <BsSend />
       }
       </button>
        </div>
    </form>
  )
}



export default MessageInput