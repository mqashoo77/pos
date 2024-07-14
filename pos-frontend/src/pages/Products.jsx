import React from "react";
import { useState, useEffect } from "react";

//css
import "../assets/ProductsPage.css";
//Components
import ProductsTable from "../components/productsTable.jsx";
import ProductPageModals from "../components/productPageModals.jsx";
import axiosInstance from '../utils/axiosInstance.js';


const Products = () => {

  const numberOfItemInPag = 3
  var from = 0
  var to = numberOfItemInPag


  const [products, setProducts] = useState([]);
  
  const [pagProduct, setPagProduct] = useState([]);
  const [index, setIndex] = useState(0);

  const [productFormPopModel, setProductFormPopModal] = useState(false);
  const [deleteProductConfirmPopModel, setDeleteProductConfirmPopModel] =
    useState(false);
  const [productDescriptionPopModal, setProductDescriptionPopModal] =
    useState(false);
  const [productId, setProductId] = useState(false);
  const [categories, setCategories] = useState(null);
  
  const [productSearchValue, setProductSearchValue] = useState("");
  const [productsFilter, setProductsFilter] = useState([]);

  const [isPreviousDisable, setIsPreviousDisable] = React.useState(true);
  const [isNextDisable, setIsNextDisable] = React.useState(false);

  // const [numberOfItemInPag, setNumberOfItemInPag] = React.useState(3);

  

  useEffect(() => {
    const getProducts = async () => {
      try{
        const { data } = await axiosInstance.get('/products');
        setProducts(data);
        
      }catch(err){
        console.log(err);
      }
    };

    const getCategories = async () => {
      try{
        const { data } = await axiosInstance.get('/categories');
        setCategories(data);

      }catch(err){
        console.log(err);
      }
    };
    getProducts();
    getCategories();
    // setPagProduct(products.slice(from, to))
  }, [
    productFormPopModel,
    deleteProductConfirmPopModel,
    productDescriptionPopModal,
  ]);

  const showProducts = (flag) => {
          
  };

  const search = (e) => {
    if (e.target.value != "") {
      setProductSearchValue(e.target.value);
      const filterProducts = products.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setProductsFilter(filterProducts);
    } else {
      setProductSearchValue(e.target.value);
    }
  };

  return (
    <div className="main-container">
      <div className="product-add-search">
        <div className="product-add">
          <button onClick={() => setProductFormPopModal(true)}>
            <i class="fa-solid fa-plus"></i> Add Product
          </button>
        </div>
        <div className="product-search">
          <input
            type="text"
            name="product-search"
            id="product-search"
            placeholder="Search"
            value={productSearchValue}
            onChange={search}
          />
        </div>
      </div>

      <ProductsTable
        products={products}
        setProductFormPopModal={setProductFormPopModal}
        setDeleteProductConfirmPopModel={setDeleteProductConfirmPopModel}
        setProductDescriptionPopModal={setProductDescriptionPopModal}
        setProductId={setProductId}
        productsFilter={productsFilter}
        productSearchValue={productSearchValue}
      ></ProductsTable>
      <div>
      <button onClick={()=>showProducts(0)} disabled = {isPreviousDisable} style={{ cursor: isPreviousDisable ? 'not-allowed' : 'pointer' }}> Previous</button>
      <button onClick={()=> showProducts(1)} disabled= {isNextDisable} style={{ cursor: isNextDisable ? 'not-allowed' : 'pointer' }}> Next</button>
      </div>
      <ProductPageModals
        productFormPopModel={productFormPopModel}
        setProductFormPopModal={setProductFormPopModal}
        deleteProductConfirmPopModel={deleteProductConfirmPopModel}
        setDeleteProductConfirmPopModel={setDeleteProductConfirmPopModel}
        productDescriptionPopModel={productDescriptionPopModal}
        setProductDescriptionPopModal={setProductDescriptionPopModal}
        productId={productId}
        setProductId={setProductId}
        categories={categories}
        products={products}
      ></ProductPageModals>
    </div>
  );
};

export default Products;
