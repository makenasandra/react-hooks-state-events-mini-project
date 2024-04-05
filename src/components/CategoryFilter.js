import React from "react";

function CategoryFilter({categories, handleCategoryClick}) {
  let categoryList = categories.map(category=>{
    return (
      <button key={category} onClick={()=>handleCategoryClick(category)}>{category}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
