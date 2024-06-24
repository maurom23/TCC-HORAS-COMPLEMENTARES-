import "./Chat.styles.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChatMessages, getChatUser } from "./getChatInfo";
import Message from "../../components/Message/Message";

const Chat = () => {
    const [chatWithUser, setChatWithUser] = useState("");
    const [messages, setMessages] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setMessages(getChatMessages(id));
        setChatWithUser(getChatUser(id));
    }, [id]);

    return (
        <div className="chat-page">
            <div className="list-header">
                <h2>{chatWithUser}</h2>
            </div>
            <div className="messages-container">
                {messages.map(message => (
                    <Message
                        text={message.text}
                        userImage={message.userImage}
                        leftAlign={!message.isUser}
                    />
                ))}
            </div>
        </div>
    );
};

export default Chat;
