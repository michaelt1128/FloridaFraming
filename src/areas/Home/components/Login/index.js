import React from 'react';
import TextField from 'shared/components/TextField';

import './styles.scss';

const Login = props => {
    var { username, updateUsername, updatePassword, password } = props;
    return (
        <div className="ffs-login">
            <h3>Member Login</h3>
            <form onSubmit={props.handleLogin}>
                <TextField
                    type="text"
                    onChange={(event) => updateUsername(event.target.value)}
                    value={username}
                    label="Email"
                />
                <TextField
                    type="password"
                    onChange={(event) => updatePassword(event.target.value)}
                    value={password}
                    label="Password"
                />
                <button
                    className="__submit-button"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    )
};

export default Login;