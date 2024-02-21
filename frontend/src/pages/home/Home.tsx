import { useNavigate } from "react-router-dom";
import MessageContainer from "../../components/message/MessageContainer";
import NoChatSelected from "../../components/message/NoChatSelected";
import SideBar from "../../components/sidebar/SideBar";
import { useAuthContext } from "../../context/Authcontext";
import { useEffect } from "react";
import useConversationContext from "../../store/zustand";

const Home: React.FC = () => {
  const {user}= useAuthContext()
  const navigate = useNavigate()

  const {selectedConversation,setSelectedConversation} = useConversationContext() 
   
   useEffect(()=>{
    if(!user.id){
       navigate("/signup")
    }

   },[])

   useEffect(()=>{
    return setSelectedConversation({...selectedConversation,_id :""} as any)
   },[])

  return <div className="flex sm:h-[450px] md:h-[550] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
    <SideBar/>
    {!selectedConversation?._id.length?
    <NoChatSelected/>
    :
    <MessageContainer firstName={selectedConversation.firstName} lastName={selectedConversation.lastName} profilePic={selectedConversation.profilePic} />
    }
  </div>;
};

export default Home;
