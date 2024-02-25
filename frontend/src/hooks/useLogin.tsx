import  { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

interface credential {
  email: string;
  password: string;
}

interface useLoginReturn {
  loading: boolean;
  login: (cred: credential) => void;
}

const useLogin = (): useLoginReturn => {
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (cred: credential) => {
    setLoading(true);
    let res = validate(cred);
    if (!res) {
      toast.error("Enter valid Credential");
      setLoading(false);
      return;
    }
    let payload: string = JSON.stringify(cred);
    let data;
    try {
      //  data = (await axios.post("http://localhost:8080/auth/login", cred,{withCredentials: true})).data;
      data = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: 'follow',
        credentials: 'include', // Don't forget to specify this if you need cookies
        body: payload,
      });
      data = await data.json();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An Error Occur");
      }
      setLoading(false);
    }

    if (data.status) {
      localStorage.setItem("chat-user", JSON.stringify(data.data));
      setUser(data.data);
      setLoading(false);
      toast.success("Login Success");
      navigate("/");
    } else {
      setLoading(false);
      toast.error(data.message);
    }
  };

  return { loading, login };
};

function validate(obj: credential): boolean {
  if (!obj.email || !obj.password) {
    return false;
  }

  if (obj.password.length < 6) {
    return false;
  }
  return true;
}

export default useLogin;
