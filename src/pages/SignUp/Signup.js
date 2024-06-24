import { useState } from "react";
import Button from "../../components/Form/Button/Button";
import Input from "../../components/Form/Input/Input";

const Signup = () => {
    const [username, setUsername] = useState("the_jane");

    return (
        <div className="login-page">
            <h1>Register</h1>
            <Input
                type="text"
                value={username}
                onChange={event => setUsername(event.target.value)}
                placeholder="Email"
            />
            <Button isLink to="/home">
                SIGN UP
            </Button>
            <p>
                By signing up, you agree to our Terms of Service and Privacy
                Policy.
            </p>
        </div>
    );
};

export default Signup;
