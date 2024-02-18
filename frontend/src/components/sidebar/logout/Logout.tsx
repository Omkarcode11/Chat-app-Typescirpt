import React from 'react'
import { SlLogout } from "react-icons/sl";

const Logout:React.FC=()=> {
  return (
    <>
      <div className="divider p-0 m-0 h-1"></div>

    <div className='mt-auto'><SlLogout className='w-6 h-6 text-white cursor-pointer' /></div>
    </>
  )
}

export default Logout