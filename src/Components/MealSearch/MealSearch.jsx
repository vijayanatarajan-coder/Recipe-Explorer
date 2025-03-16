import React, { useState } from "react";
import "./MealSearch.css";
const MealSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar flex">
      <label htmlFor="meal-search" className="visually-hidden">
        Search for meals
      </label>
      <input
        id="meal-search"
        type="text"
        placeholder="Search for meals..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" aria-label="Search">
        Search
      </button>
    </form>
  );
};

export default MealSearch;
