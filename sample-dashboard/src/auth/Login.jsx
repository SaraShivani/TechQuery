import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const hardcodedUsername = 'user1';
    const hardcodedPassword = 'password1';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      setAuthenticated(true);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="bg-img">
      <div className="content">
        <header>Login </header>
        <form>
          <div className="field">
          <img width="48" height="48" src="https://img.icons8.com/color/48/person-male.png" alt="person-male"/>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required=""
              placeholder="Username"
            />
          </div>
          <div className="field space">
          <img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/password.png" alt="password"/>
            <input
              type="password"
              className="pass-key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required=""
              placeholder="Password"
            />
          </div>
          <br></br>
          <div className="field">
            <button type="button" onClick={handleLogin} >
              <b>LOGIN</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
