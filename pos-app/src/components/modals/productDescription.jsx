import React from 'react'
import { useEffect } from 'react';

function ProductDescription({products,productId}) {

  useEffect(()=> { console.log("PD")},[])
  return (
    <div>
        <h1>
          {products[productId].productDescription}
        </h1>
        </div>
  )
}

export default ProductDescription