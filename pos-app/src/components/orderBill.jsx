import React from "react";

function OrderBill() {
  return (
    <div className="order-bill">
      <div className="sub-total">
        <h1>Subtotal</h1>
        <span>85$</span>
      </div>
      <div className="tax">
        <h1>Tax</h1>
        <span>5$</span>
      </div>
      <div className="total">
        <div className="total-info">
          <h1>Total</h1>
          <span>90$</span>
        </div>
      </div>
    </div>
  );
}

export default OrderBill;
