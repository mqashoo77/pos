import React from "react";
import "../assets/posPage.css";
import ProductItem from "../components/productItem.jsx";
import OrderList from "../components/orderList.jsx";
import OrderBill from "./../components/orderBill";
import OrderPaymentProcess from "./../components/orderPaymentProcess";

import { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "../components/categoryCard.jsx";

function PosPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectCategoty, setSelectCategoty] = useState("All");
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const newOrder = [];

  const [activeButton, setActiveButton] = useState(0);
  const handleButtonClick = (buttonIndex,categoryName) => {
    setActiveButton(buttonIndex);
    setSelectCategoty(categoryName);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://127.0.0.1:5000/products/");
      setProducts(data);
    };

    const getCategories = async () => {
      const { data } = await axios.get("http://127.0.0.1:5000/categories/");

      setCategories(data);
    };
    getData();
    getCategories();
  }, []);

  useEffect(() => {
    if (selectCategoty != "All") {
      const filterProducts = products.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(selectCategoty.toLowerCase())
        )
      );
      setCategoryProducts(filterProducts);
    }
  }, [selectCategoty]);



  return (
    <div className="main-container-posPage">
      <div className="menu-container">
        <div className="menu-header">
          <div className="menu-header-search">
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="page-title">
          <h1>Dashboard</h1>
        </div>
        <div className="categories-section">
          
            <h1 className="categories-title">Chose Category</h1>
      
          <div className="categories-items">
            <CategoryCard
            key={0}
            categoryName="All Categories"
            selectCategoty={selectCategoty}
            setSelectCategoty={setSelectCategoty}
            isActive ={activeButton===0}
            onClick={()=>handleButtonClick(0,"All Categories")}
          />
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              categoryName={category.categoryName}
              selectCategoty={selectCategoty}
              setSelectCategoty={setSelectCategoty}
              isActive ={activeButton===category.id}
              onClick={()=>handleButtonClick(category.id,category.categoryName)}
              
            />
          ))}
          </div>
        </div>
        <h1 className="m">Menu</h1>
        <div className="menu-product">
          {selectCategoty != "All Categories"
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
            <div className="order-list-payment-info">
              <OrderBill order={order}></OrderBill>
              <OrderPaymentProcess></OrderPaymentProcess>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosPage;
