import React, { Component } from "react";
import "../assets/LoginPage.css";

import { Navigate } from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: "",
      },
    };
  }
  handleFormChange = (event) => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew,
    });
  };

  login = (event) => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;

    if (user_id === "admin" && user_password === "admin") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true,
      });
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Navigate to="/" />;
    }
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
          
          <form onSubmit={this.login} className="form-signin">
          <div className="login-message">
          <h1>Please Sign in</h1>  
          </div>
            <div className="input-container">
              <input
                className="user-input"
                type="text"
                name="user_id"
                onChange={this.handleFormChange}
                placeholder="Enter Username"
              />
              <input
                className="user-input"
                type="password"
                name="user_password"
                onChange={this.handleFormChange}
                placeholder="Enter Password"
              />
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
  }
}
export default LoginPage;
