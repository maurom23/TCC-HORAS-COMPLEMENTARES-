import { Link } from "react-router-dom";
import "./ChatItem.styles.css";

const ChatItem = ({ image, name, text, chatId }) => {
    return (
        <Link className="chat-item" to={`${chatId}`}>
            <img src={image} alt={name} />
            <div className="text-container">
                <h5>{name}</h5>
                <p>{text}</p>
            </div>
        </Link>
    );
};

export default ChatItem;
