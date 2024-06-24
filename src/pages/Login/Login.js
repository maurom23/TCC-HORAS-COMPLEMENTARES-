import { useState } from "react";
import "./Login.styles.css";
import Button from "../../components/Form/Button/Button";
import Input from "../../components/Form/Input/Input";

const Login = ({ isRegister }) => {
    const [email, setEmail] = useState("andre.andre@example.com");
    const [password, setPassword] = useState("123456");

    const headerText = isRegister ? "Register" : "Log in";
    const btnText = isRegister ? "NEXT" : "LOG IN";
    const path = isRegister ? "/sign-up" : "/home";

    return (
        <div className="login-page">
            <h1>{headerText}</h1>
            <Input
                type="text"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email"
            />
            <Input
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Password"
            />
            <Button isLink to={path}>
                {btnText}
            </Button>
        </div>
    );
};

export default Login;
