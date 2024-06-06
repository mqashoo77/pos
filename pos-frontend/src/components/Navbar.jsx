import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
//css
import "../assets/Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="header-container">
          <Link to="/" className="logo">
            cool POS
          </Link>
          <nav className="navigation"></nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
