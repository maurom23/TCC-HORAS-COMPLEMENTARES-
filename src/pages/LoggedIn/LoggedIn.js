import "./LoggedIn.styles.css";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const LoggedIn = () => {
    return (
        <div className="loggedin-page">
            <Outlet />
            <Footer />
        </div>
    );
};

export default LoggedIn;
