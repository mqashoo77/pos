import React from "react";

function CategoryCard({
  categoryName,
  isActive,
  onClick,
  setSelectCategoty,
}) {

  const handle = (e) => {
    setSelectCategoty(categoryName);
  };

  return (
    <div className="category-card" >
      <button
        className={isActive ? "active-button" : "main-button"}
        onClick={onClick}
      >
        {categoryName}
      </button>
    </div>
  );
}

export default CategoryCard;
