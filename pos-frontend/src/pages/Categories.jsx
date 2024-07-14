import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "antd";

import axios from "axios";
//components
import CategoryForm from "../components/modals/categoryForm";
import DeleteCategotyConfirmation from "../components/modals/deleteCategotyConfirmation";
import CategoryTable from "../components/categoryTable";
import PaginationTable from "../components/paginationTable";
import axiosInstance from '../utils/axiosInstance.js';

//css
import "../assets/categoriesPage.css";
import "../App.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [popModel, setPopModel] = useState(false);
  const [deleteCategoryPopModel, setDeleteCategoryPopModel] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [deleteCategory, setDeleteCategory] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try{
        const { data } = await axiosInstance.get('/categories');
        setCategories(data);

      }catch(err){
        console.log(err);
      }
    };
    getCategories();
  }, [popModel, deleteCategoryPopModel]);

  const [categorySearchValue, setCategorySearchValue] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [tableFilter, setTableFilter] = useState([]);

  function filterData(e) {
    if (e.target.value != "") {
      setCategorySearchValue(e.target.value);
      const filterTable = categories.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter(filterTable);
    } else {
      setCategorySearchValue(e.target.value);
    }
  }
  return (
    <div className="main-container">
      <div className="category-add-search">
        <button onClick={() => setPopModel(true)}>Add Category</button>

        <div className="category-search">
          <input
            type="text"
            name="category-search"
            id="category-search"
            placeholder="Search"
            value={categorySearchValue}
            onChange={filterData}
          />
        </div>
      </div>

      <CategoryTable
        categories={categories}
        setDeleteCategoryPopModel={setDeleteCategoryPopModel}
        setDeleteCategory={setDeleteCategory}
        setEditCategory={setEditCategory}
        setPopModel={setPopModel}
        categorySearchValue={categorySearchValue}
        tableFilter={tableFilter}
      ></CategoryTable>

      {/* <PaginationTable pages={totalPagesNum} setCurrentPage={setCurrentPage}>

      </PaginationTable> */}

      {popModel && (
        <Modal
          title={
            editCategory === false ? "Add a new Category" : "Edit Category"
          }
          open={popModel}
          onCancel={() => {
            setPopModel(false);
            setEditCategory(false);
          }}
          footer={null}
        >
          <CategoryForm
            editCategory={editCategory}
            setPopModel={setPopModel}
            setEditCategory={setEditCategory}
          ></CategoryForm>
        </Modal>
      )}
      {deleteCategoryPopModel && (
        <Modal
          className="modal"
          title="Delete confirmation "
          open={deleteCategoryPopModel}
          onCancel={() => {
            setDeleteCategoryPopModel(false);
            setDeleteCategory(false);
          }}
          footer={null}
        >
          <DeleteCategotyConfirmation
            deleteCategory={deleteCategory}
            setDeleteCategoryPopModel={setDeleteCategoryPopModel}
            setDeleteCategory={setDeleteCategory}
          ></DeleteCategotyConfirmation>
        </Modal>
      )}
    </div>
  );
}

export default Categories;
