import axios from "axios";
import  { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { responseLogout,ResUser } from "../utils/Interfaces";
import { useAuthContext } from "../context/Authcontext";

interface useLogoutFn {
  loading: boolean;
  logOut: () => void;
}


const useLogout = (): useLogoutFn => {
  const [loading, setLoading] = useState<boolean>(false);
  const {setUser}=useAuthContext()
  const navigate = useNavigate();

  const logOut = async() => {
    setLoading(false);
    let data:responseLogout = await (await axios.post('http://localhost:8080/auth/logout')).data
    if(data.status){
         
        localStorage.clear();
        setLoading(true);
        toast.success(data.message)
        // setUser()
        let dummy:ResUser ={
          email:"",
          firstName:"",
          gender:"female",
          id:"",
          lastName:"",
          password:"",
          profilePic:"",
        }
        setUser(dummy)
        navigate("/login");
    }else{
        toast.error(data.message)
        
    }
  };
  return { loading, logOut };
};

export default useLogout;
