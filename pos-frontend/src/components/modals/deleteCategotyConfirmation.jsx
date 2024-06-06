import React from "react";

import "../../assets/components/modals/deleteCategotyConfirmation.css";
import axios from "axios";

function DeleteCategotyConfirmation(props) {
  let id = props.deleteCategory;

  async function handleDeleteCategory() {
    await axios.delete("http://127.0.0.1:3000/categories/" + id);
    props.setDeleteCategoryPopModel(false)
  }
  return (
    <div className="task-delete-confirm">
      <div className="confirmation-content">
        <i className="fa-solid fa-circle-exclamation"></i>
        <p>Are you Sure ?</p>
        <p>You will not be able to recover this Category !</p>
      </div>

      <div className="confirm-action-btn">
        <button
          className="cancel-btn"
          onClick={() => {
            props.setDeleteCategoryPopModel(false);
            props.setDeleteCategory(false);
          }}
        >
          Cancel
        </button>
        <button className="confirm-btn" onClick={()=> handleDeleteCategory()}>Yes, Delete it !</button>
      </div>
    </div>
  );
}

export default DeleteCategotyConfirmation;
