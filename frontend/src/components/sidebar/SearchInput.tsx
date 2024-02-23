import React, { useState } from 'react'
import { FcSearch } from "react-icons/fc";
import useConversationContext from '../../store/zustand';
import useConversationState from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput:React.FC=()=> {
  const [search,setSearch] = useState<string>('')
  const {setSelectedConversation} = useConversationContext()
  const {conversation}= useConversationState()
  
  function searchHandler(e: React.FormEvent<HTMLFormElement>):void {
     e.preventDefault()
     if(search.length==0)return 
     if(search.length<=3){
      toast.error("Search query must be greater than 3 character")
      return 
     }

     let newConversation = conversation.find((ele)=>(ele.firstName+ " " + ele.lastName).toLocaleLowerCase().includes(search.toLocaleLowerCase()))

     if(!newConversation){
      toast.error("User not found")
     }
     if(newConversation)
     setSelectedConversation(newConversation)

     setSearch("")
     
  }
   

  return (
    <div>
        <form onSubmit={searchHandler} className='flex items-center gap-2'>
            <input type='text' placeholder='Search...' className='input input-bordered rounded-full' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button type='submit' className='btn btn-circle bg-sky-500 text-white '>
            <FcSearch  className='w-6 h-6 outline-none' />
            </button>
        </form>
    </div>
  )
}

export default SearchInput