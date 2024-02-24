import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ResUser, User } from "../utils/Interfaces";

interface AuthContextType {
  user: ResUser;
  setUser: Dispatch<SetStateAction<ResUser>>;
}

interface UserProvideProps {
  children: ReactNode;
}

const defaultState = {
  user: {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    profilePic: "",
    id:""
  },
  setUser: (user: ResUser) => {},
} as AuthContextType;

export const AuthContext = createContext(defaultState);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: UserProvideProps) => {
  let defaultUser: ResUser = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    profilePic: "",
    id: "",
  };

  const storedUser = localStorage.getItem("chat-user");
  const [user, setUser] = useState<ResUser>(
    storedUser ? JSON.parse(storedUser) : defaultUser
  );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
