import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { useAuthContext } from './Authcontext'
import io from 'socket.io-client'
import { BASE_URL } from '../utils/constants';

const socketContext = createContext<{socket:any; onlineUser:any}>({} as any)

export const useSocketContext = ()=>{
       return useContext(socketContext)
}



const SocketContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [socket,setSocket] = useState<any>()
    const [onlineUser,setOnlineUser] = useState<any>('')
    const  {user} = useAuthContext()
   

    useEffect(() => {
        let newSocket: any; // Declare a new variable to avoid shadowing
    
        if (user?.id) {
            newSocket = io(BASE_URL,{
              query:{
                 userId: user.id
              }
            }
            ) // Use the new variable here

            setSocket(newSocket)

            newSocket.on('onlineUsers',(user:any)=>{setOnlineUser(user)})
    
            return ()=> {newSocket.disconnect() }// Close the new socket
        } else {
            if (newSocket) {
              newSocket.close()
                setSocket(null)
            }
        }
    }, [user.id])

  return (
    <socketContext.Provider value={{socket,onlineUser}}>
      {children}
    </socketContext.Provider>
  )
}

export default SocketContextProvider