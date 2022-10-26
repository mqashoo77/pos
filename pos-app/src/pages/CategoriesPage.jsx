import React from 'react'

import '../assets/categoriesPage.css'

function Categories() {
  return (
    <div className='main-container' >

        <div className="category-add-search">
          <button>Add Category</button>
          <div className="category-search">
            <label forhtml="category-search">Search</label>
            <input type="text" name="category-search" id="category-search" />
          </div>
        </div>
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
                <tr>
                  <td></td>
                  <td></td>
                  <td className="action-button">
                    <button className='edit-btn'>
                      <span>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </span>
                    </button>
                    <button className='trash-btn'>
                      <span>
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </button>
                  </td>
                </tr>
             
            </tbody>
          </table>
        </div>


    </div>
  )
}

export default Categories