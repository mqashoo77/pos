import React from "react";

function CategoryTable({
  categories,
  setDeleteCategoryPopModel,
  setDeleteCategory,
  setEditCategory,
  setPopModel,
  categorySearchValue,
  tableFilter,
}) {
  return (
    <div className="table-section">
      <table>
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categorySearchValue.length > 0
            ? tableFilter.map((category) => (
                <tr key={category.id}>
                  <td>{category.categoryName}</td>
                  <td>{category.categoryCreat}</td>
                  <td className="action-button">
                    <button
                      className="edit-btn"
                      onClick={() => {
                        setPopModel(true);
                        setEditCategory(category.id);
                      }}
                    >
                      <span>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </span>
                    </button>
                    <button
                      className="trash-btn"
                      onClick={() => {
                        setDeleteCategoryPopModel(true);
                        setDeleteCategory(category.id);
                      }}
                    >
                      <span>
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            : categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.categoryName}</td>
                  <td>{category.categoryCreat}</td>
                  <td className="action-button">
                    <button
                      className="edit-btn"
                      onClick={() => {
                        setPopModel(true);
                        setEditCategory(category.id);
                      }}
                    >
                      <span>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </span>
                    </button>
                    <button
                      className="trash-btn"
                      onClick={() => {
                        setDeleteCategoryPopModel(true);
                        setDeleteCategory(category.id);
                      }}
                    >
                      <span>
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryTable;
