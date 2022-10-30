import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "antd";

import axios from "axios";
//components
import CategoryForm from "../components/modals/categoryForm";
import DeleteCategotyConfirmation from "../components/modals/deleteCategotyConfirmation";
import CategoryTable from "../components/categoryTable";
import PaginationTable from "../components/paginationTable";
//css
import "../assets/categoriesPage.css";
import "../App.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [popModel, setPopModel] = useState(false);
  const [deleteCategoryPopModel, setDeleteCategoryPopModel] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [deleteCategory, setDeleteCategory] = useState(false);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [categoriesPerPage, setCategoriesPerPage] = useState(2);
  // const iolc = currentPage * categoriesPerPage
  // const iofc = iolc - categoriesPerPage;
  // const currentCategories = categories.slice(iofc, iolc);
  // const totalPagesNum = Math.ceil(categories.length / categoriesPerPage);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://127.0.0.1:3000/categories/");
      setCategories(data);
      ////////////////////TEST
      // console.log(dataSource);
    };
    getData();
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
      // setDataSource([...dataSource])
    }
  }
  return (
    <div className="main-container">
      <div className="category-add-search">
        <button onClick={() => setPopModel(true)}>Add Category</button>

        <div className="category-search">
          <label forhtml="category-search">Search</label>
          <input
            type="text"
            name="category-search"
            id="category-search"
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
