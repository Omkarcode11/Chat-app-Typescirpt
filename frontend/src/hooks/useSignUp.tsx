import React, { useState } from "react";
import { ResUser, User } from "../utils/Interfaces";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/Authcontext";

interface signUpResponse {
  data:ResUser 
  status: boolean;
  message: string;
}

interface useSignUpReturn {
  loading: boolean;
  signUp: (obj: User) => void;
}

const useSignUp = (): useSignUpReturn => {
  const navigate = useNavigate();
  const {user,setUser} = useAuthContext()
  const [loading, setLoading] = useState<boolean>(false);

  async function signUp(obj: User) {
    let valid = validate(obj);
    if (!valid) return;
    let data: signUpResponse;

    setLoading(true);
    try {
      data = (await axios.post("http://localhost:8080/auth/signup", obj,{withCredentials: true})).data;
      if (!data.status) {
        if (typeof data.message == "string") toast.error(data.message);
      } else { 
        toast.success('Success SignUp');
        localStorage.setItem("chat-user",JSON.stringify(data.data))

         if(data.data)
          setUser(data.data)
        
        navigate("/");
      }
    } catch (err) {
      if(err instanceof Error){
        toast.error(err.message)
      }else{
        toast.error("An Error Occur")
      }
    } finally {
      setLoading(false);
    }
  }
  return { loading, signUp };
};

export default useSignUp;

function validate(user: User): boolean {
  let { email, firstName, gender, lastName, password } = user;
  if (!email || !firstName || !gender || !lastName || !password) {
    toast.error("Enter valid data ")
    return false;
  }

  if (password.length < 5) {
    toast.error("Password should grater than 6 character")
    return false;
  }

  return true;
}
