import "./ChatList.styles.css";
import profilePic from "../../assets/profile.png";
import anonProfilePic from "../../assets/profile2.png";
import ChatItem from "../../components/ChatItem/ChatItem";

const ChatList = () => {
    return (
        <div className="chatlist-page">
            <div className="list-header">
                <h2>Chats</h2>
            </div>
            <ChatItem
                chatId={1}
                image={profilePic}
                name="Andre"
                text="Excelente relatorio vale 20 horas proxima precisa"
            />
            <ChatItem
                chatId={2}
                image={anonProfilePic}
                name="Mauro Felipe "
                text="Excelente relatorio vale 20 horas proxima precisa"
            />
            <ChatItem
                chatId={3}
                image={anonProfilePic}
                name="John Pablo"
                text="Excelente relatorio vale 20 horas proxima precisa"
            />
            <ChatItem
                chatId={4}
                image={anonProfilePic}
                name="Gustavo Nobre"
                text="Excelente relatorio vale 20 horas proxima precisa"
            />
        </div>
    );
};

export default ChatList;
