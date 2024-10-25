import "../assets/LoginPage.css";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from '../utils/axiosInstance';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();

        try {
          
            const response = await axiosInstance.post('/login',
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            );
            console.log(JSON.stringify(response?.data));
            localStorage.setItem("token", response?.data.username);
            navigate('/');
        } catch (err) {
            if (!err?.response) {
              setErrorMessage('No Server Response');
            } else if (err.response?.status === 400) {
              setErrorMessage('Missing Username or Password');
            } else if (err.response?.status === 401) {
              setErrorMessage('Unauthorized');
            } else {
              setErrorMessage('Login Failed');
            }
        }
  };

  return (
    <div className="container">
      <div className="login-pic-container">
        <img
          src="./img/hamburger.png"
          alt="humburger"
          width="800px"
          height="700px"
        />
      </div>
      <div className="form-container">
        <form onSubmit={handleLogin} className="form-signin">
          <div className="login-message">
            <h1>Please Sign in</h1>
          </div>
          <div className="input-container">
            <input
              className="user-input"
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
            <input
              className="user-input"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <p>
              {errorMessage}
            </p>
          </div>
          {/* <input type="submit" value="Login" /> */}
          <button className="login-button" type="submit">
            {" "}
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
