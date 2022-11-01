import React from 'react'
import { Modal } from 'antd';

import ProductForm from "./modals/productForm.jsx"
import Categories from './../pages/CategoriesPage';

function ProductPageModals(
  {
    productFormPopModel,
    setProductFormPopModal,
    deleteProductConfirmPopModel,
    setDeleteProductConfirmPopModel,
    productDescriptionPopModel,
    setProductDescriptionPopModal,
    productId,
    setProductId,
    categories
  }
) {
  return (
    <div>
      {
      productFormPopModel && (
        <Modal
        title={
          productId === false ? "Add a new Product" : "Edit Product"
        }
        open={productFormPopModel}
        onCancel={() => {
          setProductFormPopModal(false);
          setProductId(false);
        }}
        footer={null}
      >
        <ProductForm
          productId={productId}
          setProductId={setProductId}
          setProductFormPopModal={setProductFormPopModal}
          categories={categories}
          />
      </Modal>
      )
     
    }
    </div>
   
  )
}

export default ProductPageModals