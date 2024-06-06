import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

///css
import '../../assets/components/modals/categoryForm.css'
import datetime from "../../utils/datetime";



function CategoryForm(props) {
  const [categoryName, setName] = useState("");
  // const [categoryCreat, setCreat] = useState("");
  let id = props.editCategory
  
  const navigate = useNavigate();
  function handleName(e) {
    setName(e.target.value);
  }


  useEffect(() => {
    console.log("First call on mount..");
    const getData = async () => {
      if (id !== false) {
        const { data } = await axios.get("http://127.0.0.1:3000/categories/" + id);
        console.log(data)
        setName(data.categoryName)
      }  
    };
    getData();

  },[]);
 
  async function handleSubmit(e) {
    
    e.preventDefault();
    let categoryCreat = datetime()
    // Add 
    if (id===false){
      const obj = { categoryName, categoryCreat };
       // call Backend
      await axios.post("http://127.0.0.1:3000/categories", obj);
    }
    // Edit
    else{
      const obj = { categoryName, categoryCreat };
      await axios.put("http://127.0.0.1:3000/categories/"+id, obj);

    }
    props.setPopModel(false);

  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} >
        <div className="category-container">
          <label forhtml="categoryName">Category Name</label>
          <input
            type="text"
            name="categoryName"
            id="category-name"
            value={categoryName}
            onChange={handleName}
            required
          />
        </div>
        <div className="action-btn">
          <div>

          <button onClick={()=> {
               props.setPopModel(false);
               props.setEditCategory(false)
             }}
           > Cancel</button>

          </div>
            <div>
            <button type="submit">{id === false ? "Add" : "Edit"} </button>
            </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default CategoryForm;
