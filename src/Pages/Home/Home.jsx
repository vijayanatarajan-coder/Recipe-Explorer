import React, { useState, useEffect } from "react";
import {
  fetchRandomMeals,
  searchByName,
  searchByFirstLetter,
  searchByIngredient,
  fetchCategories,
  fetchMealsByCategory,
} from "../../Components/ApiServices/ApiServices";
import MealDisplay from "../../Components/MealDisplay/MealDisplay";
import MealSearch from "../../Components/MealSearch/MealSearch";
import CategoryFilter from "../../Components/CategoryFilter/CategoryFilter";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadRandomMeals();
    loadCategories();
  }, []);

  const loadRandomMeals = async () => {
    try {
      setLoading(true);
      const randomMeals = await fetchRandomMeals(6);
      setMeals(randomMeals);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const loadCategories = async () => {
    try {
      setLoading(true);
      const categoriesData = await fetchCategories();
      setCategories(categoriesData || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError(null);
      let searchResults;

      if (query.length === 1) {
        searchResults = await searchByFirstLetter(query);
      } else if (query.includes(",")) {
        searchResults = await searchByIngredient(query.split(",")[0].trim());
      } else {
        searchResults = await searchByName(query);
      }

      setMeals(searchResults.meals || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleCategoryClick = async (category) => {
    try {
      setLoading(true);
      if (category === "") {
        await loadRandomMeals();
        return;
      }

      const mealsData = await fetchMealsByCategory(category);
      setMeals(mealsData || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main>
      <MealSearch onSearch={handleSearch} />
      <CategoryFilter
        categories={categories}
        onCategoryClick={handleCategoryClick}
      />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <MealDisplay meals={meals} />
    </main>
  );
};

export default Home;
