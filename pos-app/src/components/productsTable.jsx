import React from 'react'
import { useState } from 'react'

function ProductsTable({
    products,
    setProductFormPopModal,
    setDeleteProductConfirmPopModel,
    setProductDescriptionPopModal,
    setProductId

}) {
  return (
    <div className="table-section">
      <table>
        <thead>
          <tr>
            <th>Product IMG</th>
            <th>Product CODE</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Description</th>
            <th>Price</th>
            <th>TAX %</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                  <td><div>
                  <img src={product.productImg}/>
                    </div></td>
                  <td>{product.productCode}</td>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td className='action-button'><button
                      className="edit-btn"
                    >
                      <span>
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </span>
                    </button></td>
                  <td>{product.productPrice}</td>
                  <td>{product.productTax}</td>
                  <td className="action-button">
                    <button
                      className="edit-btn"
                      onClick={() => {setProductFormPopModal(true)
                            setProductId(product.id)
                        }}
                    >
                      <span>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </span>
                    </button>
                    <button
                      className="trash-btn"
                    
                    >
                      <span>
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
    </table>
    </div>
  )
}

export default ProductsTable