import React from "react";
import { useNavigate } from "react-router-dom";
/////css
import "../assets/Layout.css";
import Categories from "./../pages/CategoriesPage";

function Layout(props) {
  const navigate = useNavigate();
  return (
    <aside>
      <div className="aside-container">
        <div className="nav-btn">
          <button onClick={() => navigate("/")}>
            <span class="material-symbols-outlined">dashboard</span>
            <h6>dashboard</h6>
          </button>
          <button onClick={() => navigate("/Categories")}>
            <span class="material-symbols-outlined">category</span>
            <h6>categories</h6>
          </button>
          <button onClick={() => navigate("/products")}>
            <span class="material-symbols-outlined">fastfood</span>
            <h6>products</h6>
          </button>
          <button onClick={() => props.signOut()}>
            <span class="material-symbols-outlined">logout</span>
            <h6>logout</h6>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Layout;
