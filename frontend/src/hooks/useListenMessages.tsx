import  { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversationContext from "../store/zustand";
import notificationSound from "../assets/sounds/notification.mp3";

export default function useListenMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversationContext();

  useEffect(() => {
    socket?.on("newMessage", (newMsg: any) => {
      const sound = new Audio(notificationSound);
      console.log(sound)
      sound.play();

      setMessages([...messages, newMsg]);
    });
    return () => socket.off("newMessage");
  }, [socket, setMessages, messages]);
}
