import React from 'react'

function ProductItem({productName, productPrice ,productTax,productImg,order,setOrder}) {

  const handle = e => {
    const newItem = {"productName": productName, "productPrice": productPrice,
    "productTax": productTax, "productCount": 1 }
 
    let inOrder = false;
    for (let i = 0; i < order.length; i++) {
        if (order[i].productName === newItem.productName){
          inOrder = true
          break
        }
        else{continue}
    }
    (!inOrder) ?  setOrder(oldArray => [...oldArray, newItem])  : alert("This item already exists");

  }

   
 
  return (
    <div className="product-wrapper" onClick={handle}>
            <div className="product-img" >
              <img
                src={require("../assets/img/01001.jpg")}
              />
            </div>
            <div className="product-info">
              <h1>{productName}</h1>
              <strong>
                <span>{productPrice}</span>
              </strong>
            </div>
          </div>
  )
}

export default ProductItem