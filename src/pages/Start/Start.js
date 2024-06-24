import "./Start.styles.css";

import Button from "../../components/Form/Button/Button";
import logo from "../../assets/logo.png";

const Start = () => {
    return (
        <div className="start-page">
            <div className="logo-area">
                <span>
                    <img src={logo} alt="" />
                    <h1>horas</h1>
                </span>
                <h1>complementares</h1>
            </div>
            <div className="btn-group">
                <Button isLink secondary to="/login">
                    LOG IN
                </Button>
                <Button isLink to="/register">
                    REGISTER
                </Button>
            </div>
        </div>
    );
};

export default Start;
