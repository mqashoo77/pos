import React, { Component } from "react";
import ReactDOM  from 'react-dom';
import { Link } from 'react-router-dom';
//css
import '../assets/Navbar.css'
class Navbar extends Component {
  state = {  } 
  render() { 
    return (
      <header>
      <Link to="/" className="logo">cool POS</Link>
      <nav className="navigation">  
      </nav>
    </header>
    );
  }
}
 

export default Navbar;

