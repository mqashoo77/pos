import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
///// CSS
import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
///// Pages
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import PageNotFound from "./pages/404Page";
import PosPage from "./pages/PosPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";

//components

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<PageNotFound />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
