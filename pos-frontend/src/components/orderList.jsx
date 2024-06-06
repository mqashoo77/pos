import React from 'react'
import { useEffect } from 'react';

function OrderList({order,setOrder}) {

    function handleUpdateOrder(item){
      setOrder([...order]);
    }
    function handleDeleteItem(item){
      const index = order.indexOf(item);
      order.splice(index, 1);
      setOrder([...order]);
    }
  return (
    <div>
        {order.map(item => (
        <li key={item.productName}>
            <div className="order-item">
            <p className="order-name">{item.productName}</p>
            <p className="order-price">{item.productPrice} $</p>
            <div className="order-control">
                {item.productCount > 1 ? (<button onClick={()=> {handleUpdateOrder(item);item.productCount-=1}}>
                <i className="fa-solid fa-minus"></i>
                </button>):(<button onClick={()=> {handleDeleteItem(item)}}>
                <i class="fa-solid fa-trash"></i>
                </button>)}
                <span>{item.productCount}</span>
                <button  onClick={()=> {handleUpdateOrder(item);item.productCount+=1}}>
                <i className="fa-solid fa-plus"></i>
                </button>
            </div>
            </div>
      </li>
      ))}
    </div>
  )
  
}

export default OrderList