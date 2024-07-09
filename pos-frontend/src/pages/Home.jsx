import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate, Navigate } from "react-router-dom";

//components
import Layout from "../components/Layout";

// Pages
import Dashboard from './Dashboard';
import Categories from './Categories';
import ProductsPage from './Products';

const HomePage = () => {
  const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    setIsLogout(true);
    navigate("/login");
  };

  return (
    <React.Fragment>
      <Layout signOut={signOut}></Layout>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
