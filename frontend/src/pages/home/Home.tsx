import MessageContainer from "../../components/message/MessageContainer";
import NoChatSelected from "../../components/message/NoChatSelected";
import SideBar from "../../components/sidebar/SideBar";

const Home: React.FC = () => {
   let flag = true 

  return <div className="flex sm:h-[450px] md:h-[550] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
    <SideBar/>
    {flag?
    <NoChatSelected/>
    :
    <MessageContainer/>
    }
  </div>;
};

export default Home;
