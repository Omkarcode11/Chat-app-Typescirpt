import { create, SetState } from "zustand";
import { conversationType, messages } from "../utils/Interfaces";

type ConversationContextState = {
    selectedConversation: conversationType | null;
    setSelectedConversation: (obj:conversationType) => void;
    messages: messages[];
    setMessages: (message: messages[]) => void;
};

const useConversationContext = create<ConversationContextState>((set:any) => ({
    selectedConversation: null,
    setSelectedConversation: (obj: conversationType) => set({ selectedConversation: obj }),
    messages: [],
    setMessages: (message: messages[]) => set({ messages: message }),
}));

export default useConversationContext;