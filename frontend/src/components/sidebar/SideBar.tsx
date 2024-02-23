import React from 'react'
import SearchInput from './SearchInput'
import AllConversations from './conversation/AllConversations'
import Logout from './logout/Logout'

const SideBar:React.FC=() =>{

  

  return (
    
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <div className="py-2 flex flex-col overflow-auto">
        <AllConversations  />
        </div>

        <Logout/>

    </div>
  )
}

export default SideBar