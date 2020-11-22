import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyAPI from './JoblyAPI';

const Login = ( {setUser} ) => {
    const [usernameField, setUsernameField] = useState("");
    const [passwordField, setPasswordField] = useState("");

    const handleUsernameChange = (event) => {
        setUsernameField(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPasswordField(event.target.value);
    }
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const credentials = {username: usernameField, password: passwordField};
        const token = await JoblyAPI.authenticate(credentials);
        if (token) {
            localStorage._token = token;
            localStorage.username = usernameField;
            let foundUser = await JoblyAPI.getUser(localStorage.username);
            setUser(foundUser);
            history.push("/");
        }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" onChange={handleUsernameChange} value={usernameField} id="username" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={handlePasswordChange} value={passwordField} id="password" name="password" />
                <button>Submit</button>
            </form>
        </div>

    )
}

export default Login;