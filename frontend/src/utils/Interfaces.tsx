export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: "male" | "female" | "";
}

export interface ResUser extends User {
  profilePic: string;
  id: string;
}

export interface responseLogout {
  message: string;
  status: boolean;
  data: null;
}
export interface responseConversation {
  message: string;
  status: boolean;
  data: any;
}

export interface conversationType {
  firstName: string;
  lastName: string;
  profilePic: string;
  gender: string;
  _id: string;
  emoji: string;
}

export interface messages {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
