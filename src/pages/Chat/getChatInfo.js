import chats from "../../constants/chats";

const getChatMessages = chatId => {
    const chat = chats.find(chat => chat.id === chatId);
    if (chat != null) {
        return chat.messages;
    } else {
        return [];
    }
};

const getChatUser = chatId => {
    const chat = chats.find(chat => chat.id === chatId);
    if (chat != null) {
        return chat.chatWithUser;
    } else {
        return "Chat";
    }
};

export { getChatMessages, getChatUser };
