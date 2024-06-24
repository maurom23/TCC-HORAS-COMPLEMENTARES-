import { Link } from "react-router-dom";
import "./Button.styles.css";

const Button = ({ children, secondary = false, isLink = false, ...rest }) => {
    if (!isLink) {
        return (
            <button
                className={`btn ${secondary ? "btn-secondary" : "btn-primary"}`}
                {...rest}
            >
                {children}
            </button>
        );
    } else {
        return (
            <Link
                className={`btn ${secondary ? "btn-secondary" : "btn-primary"}`}
                {...rest}
            >
                {children}
            </Link>
        );
    }
};

export default Button;
