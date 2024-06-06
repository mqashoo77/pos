import React from "react";

import { useState,useEffect } from "react";
import BillingCalculation from "../utils/billingCalculation";


function OrderBill({order}) {
    const [subtotal, setSubtotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const a = BillingCalculation(order)
        setSubtotal(a[0])
        setTax(a[1])
        setTotal(a[2])
      }, [order]);
  
    return (
    <div className="order-bill">
      <div className="sub-total">
        <h1>Subtotal</h1>
        <span>{subtotal} $</span>
      </div>
      <div className="tax">
        <h1>Tax</h1>
        <span>{tax} $</span>
      </div>
      <div className="total">
        <div className="total-info">
          <h1>Total</h1>
          <span>{total} $</span>
        </div>
      </div>
    </div>
  );
}

export default OrderBill;
