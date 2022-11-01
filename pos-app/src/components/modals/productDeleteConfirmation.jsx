import React from "react";
import axios from "axios";

function ProductDeleteConfirmation({
  productId,
  setProductId,
  setDeleteProductConfirmPopModel,
}) {
  async function handleDelete() {
    await axios.delete("http://127.0.0.1:3000/products/" + productId);
    setDeleteProductConfirmPopModel(false);
  }
  return (
    <div className="task-delete-confirm">
      <div className="confirmation-content">
        <i className="fa-solid fa-circle-exclamation"></i>
        <p>Are you Sure ?</p>
        <p>You will not be able to recover this Product !</p>
      </div>

      <div className="confirm-action-btn">
        <button
          className="cancel-btn"
          onClick={() => {
            setDeleteProductConfirmPopModel(false);
            setProductId(false);
          }}
        >
          Cancel
        </button>
        <button className="confirm-btn" onClick={() => handleDelete()}>
          Yes, Delete it !
        </button>
      </div>
    </div>
  );
}

export default ProductDeleteConfirmation;
