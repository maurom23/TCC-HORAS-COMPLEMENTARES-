import "./Message.styles.css";

const Message = ({ leftAlign = false, userImage, text }) => {
    return (
        <div className={`message ${leftAlign ? "" : "message-reverse"}`}>
            <img width={50} height={50} src={userImage} alt="" />
            <p>{text}</p>
        </div>
    );
};

export default Message;
