import React from "react";

function CategoryItem({ categoryName, selectCategoty, setSelectCategoty,choseCategory}) {
  const handle = (e) => {
    setSelectCategoty(categoryName)
    // choseCategory()
  };

  return (
    <div className="category-wrapper" onClick={handle}>
      <div className="category-name">
        <h1>{categoryName}</h1>
      </div>
    </div>
  );
}

export default CategoryItem;
