import "./Footer.styles.css";
import { Link } from "react-router-dom";

import homeIcon from "../../assets/home.png";
import searchIcon from "../../assets/search.png";
import chatIcon from "../../assets/chat.png";
import personIcon from "../../assets/person.png";

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/home">
                <img src={homeIcon} alt="Go to home" />
            </Link>
            <Link to="search">
                <img src={searchIcon} alt="Go to search" />
            </Link>
            <Link className="plus-link" to="">
                +
            </Link>
            <Link to="chat">
                <img src={chatIcon} alt="Go to chat" />
            </Link>
            <Link to="profile">
                <img src={personIcon} alt="Go to profile" />
            </Link>
        </footer>
    );
};

export default Footer;
