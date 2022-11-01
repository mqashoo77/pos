import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

//css
import "../assets/ProductsPage.css";
//Components
import ProductsTable from "../components/productsTable";
import ProductPageModals from "../components/productPageModals.jsx";
function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [productFormPopModel, setProductFormPopModal] = useState(false);
  const [deleteProductConfirmPopModel, setDeleteProductConfirmPopModel] =
    useState(false);
  const [productDescriptionPopModal, setProductDescriptionPopModal] =
    useState(false);
  const [productId, setProductId] = useState(false);
  const [categories, setCategories] = useState(null);
  

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
  }, [
    productFormPopModel,
    deleteProductConfirmPopModel,
    productDescriptionPopModal,
  ]);
  const [productSearchValue, setProductSearchValue] = useState("");
  const [productsFilter, setProductsFilter] = useState([]);
  function search(e) {
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
  }
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
}

export default ProductsPage;
