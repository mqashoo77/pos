import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

//components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

///// Pages
import PosPage from './PosPage';
import Categories from './CategoriesPage';
import ProductsPage from './ProductsPage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false,
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true,
    });
  };

  render() {
    if (this.state.islogout) {
      return <Navigate to="/login" />; // no need for navigate, jsut set a token false
    }
    return (
      <React.Fragment>
        <Layout signOut={this.signOut}></Layout>
        <main>
        <Routes>
          <Route path="/" element={<PosPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        </main>
        
      </React.Fragment>
    );
  }
}

export default Home;
