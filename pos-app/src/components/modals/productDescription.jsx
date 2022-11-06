import React from 'react'
import { useEffect } from 'react';

function ProductDescription({products,productId}) {
  return (
    <div>
        <h1>
          {products[productId-1].productDescription}
        </h1>
        </div>
  )
}

export default ProductDescription