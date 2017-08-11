import React from 'react';

import './style.scss';

const Login = props => {
    var {username,updateUsername,updatePassword, password} = props.props;
    return (
        <div className="ffs-login">
            <h3>Member Login</h3>
            <form onSubmit={props.handleLogin}>
                <input type="text" onChange={(event)=>updateUsername(event.target.value)} value={username} placeholder="Email" /><br />
                <input type="password" onChange={(event)=>updatePassword(event.target.value)} value={password} placeholder="Password" /><br />
                <button className="__submit-button" type="submit">Login</button>
            </form>
        </div>
    )
};

export default Login;