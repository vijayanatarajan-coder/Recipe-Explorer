import React from "react";
import "./CategoryFilter.css";

const FilterComponent = ({ categories, onCategoryClick }) => {
  return (
    <fieldset className="filter-buttons flex">
      <legend>Filter meals by category</legend>
      <button onClick={() => onCategoryClick("")}>All</button>
      {categories.map((category) => (
        <button
          key={category.strCategory}
          onClick={() => onCategoryClick(category.strCategory)}
        >
          {category.strCategory}
        </button>
      ))}
    </fieldset>
  );
};

export default FilterComponent;
