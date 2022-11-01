import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
// import getCategories from './../../utils/categories';

function ProductForm({ productId, setProductId, setProductFormPopModal,categories }) {
  // const [productCode, setProductCode] = useState("");
  // const [productName, setProductName] = useState("");
  // const [productCategory, setProductCategory] = useState("");
  // const [productDescription, setProductDescription] = useState("");
  // const [productPrice, setProductPrice] = useState("");
  // const [productTax, setProductTax] = useState("");
  const [product, setProduct] = useState({
    productImg: "",
    productCode: "",
    productName: "",
    productCategory: "",
    productDescription: "",
    productPrice: "",
    productTax: "",
  });

  const [isDisabled, setIsDisabled] = useState(false);
  function handleCahnge(e) {
    let products = { ...product };
    products[e.target.name] = e.target.value;
    setProduct(products);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (productId === false) {
      const obj = product;
      // call Backend
      await axios.post("http://127.0.0.1:3000/products", obj);
    }
    // Edit
    else {
      const obj = product;
      await axios.put("http://127.0.0.1:3000/products/" + productId, obj);
    }
    setProductFormPopModal(false);
  }
  useEffect(() => {
    console.log("First call on mount..");

    const getData = async () => {
      if (productId !== false) {
        const { data } = await axios.get(
          "http://127.0.0.1:3000/products/" + productId
        );
        //   console.log(data)
        setProduct(data);
      }
    };
    getData();
  }, []);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="product-form-container">
          <div className="product-code">
            <label htmlFor="productCode">Product Code</label>
            <input
              type="text"
              name="productCode"
              value={product.productCode}
              onChange={handleCahnge}
            />
          </div>
          <div className="product-name">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleCahnge}
            />
          </div>

          <div className="product-description">
            <label htmlFor="productDescription">Product Description</label>
            <textarea
              type="text"
              name="productDescription"
              value={product.productDescription}
              onChange={handleCahnge}
            />
          </div>
          <div>
            <label htmlFor="productCategory">Product Category</label>
            <select
              name="productCategory"
              value={categories[0].categoryName}
              onChange={handleCahnge}
            >
              {categories.map((category) => (
                <option key={category.categoryName} value={category.categoryName}>{category.categoryName}</option>
              ))}
            </select>
          </div>
          <div className="product-price">
            <label htmlFor="productPrice">Product Price</label>
            <input
              type="text"
              name="productPrice"
              value={product.productPrice}
              onChange={handleCahnge}
            />
          </div>
          <div className="product-tax">
            <label htmlFor="productTax">Product Tax</label>
            <input
              type="text"
              name="productTax"
              value={product.productTax}
              onChange={handleCahnge}
            />
          </div>
          <div className="product-img">
            <label htmlFor="productImg">Product Img</label>
            <input
              type="file"
              name="productImg"
              accept="image/png, image/jpg"
            />
          </div>
        </div>

        <div className="action-btn">
          <div>
            <button
              onClick={() => {
                setProductFormPopModal(false);
                setProductId(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div>
            <button type="submit">
              {productId === false ? "Add" : "Edit"}
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductForm;
