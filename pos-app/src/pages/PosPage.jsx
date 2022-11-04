import React from "react";
import "../assets/posPage.css";
import CategoryItem from "../components/categoryItem.jsx";
import ProductItem from "../components/productItem.jsx";
import OrderList from "../components/orderList.jsx";


import { useState, useEffect } from "react";
import axios from "axios";

function PosPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectCategoty, setSelectCategoty] = useState("All");
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const newOrder = [];

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://127.0.0.1:3000/products/");
      setProducts(data);
    };

    const getCategories = async () => {
      const { data } = await axios.get("http://127.0.0.1:3000/categories/");

      setCategories(data);
    };
    getData();
    getCategories();
  }, []);

  function choseCategory() {
    if (selectCategoty != "All") {
      const filterProducts = products.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(selectCategoty.toLowerCase())
        )
      );
      setCategoryProducts(filterProducts);
    }
  }

  return (
    <div className="main-container-posPage">
      <div className="menu-container">
        <div className="menu-header">
          <h1>Chose Categories</h1>
          <div className="menu-header-search">
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="menu-categories">
          <CategoryItem
            categoryName="All"
            selectCategoty={selectCategoty}
            setSelectCategoty={setSelectCategoty}
          />
          {categories.map((category) => (
            <CategoryItem
              categoryName={category.categoryName}
              selectCategoty={selectCategoty}
              setSelectCategoty={setSelectCategoty}
              choseCategory={choseCategory}
            />
          ))}
        </div>
        <h1 className="m">Menu</h1>
        <div className="menu-product">
          {selectCategoty != "All"
            ? categoryProducts.map((product) => (
                <ProductItem
                  key={product.productId}
                  productName={product.productName}
                  productPrice={product.productPrice}
                  productTax={product.productTax}
                  productImg={product.productImg}
                  order={order}
                  setOrder={setOrder}
                />
              ))
            : products.map((product) => (
                <ProductItem
                  productName={product.productName}
                  productPrice={product.productPrice}
                  productTax={product.productTax}
                  productImg={product.productImg}
                  order={order}
                  setOrder={setOrder}
                />
              ))}
        </div>
      </div>
      <div className="order-container">
        <div className="order-info-container">
        <div className="order-header">
          <h1>Order List</h1>
        </div>
        <div className="order-box">
          <div className="order-list">
            <ul>
              <OrderList order={order} setOrder={setOrder} />
            </ul>
          </div>
         

          
        </div>
        </div>
      </div>
    </div>
  );
}

export default PosPage;
