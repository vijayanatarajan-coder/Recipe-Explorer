import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { fetchMealById } from "../../Components/ApiServices/ApiServices";
import MealDetailDisplay from "../../Components/MealDetailDisplay/MealDetailDisplay";

const MealDetail = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const loadMealDetails = useCallback(async () => {
    try {
      setLoading(true);
      const mealData = await fetchMealById(id);
      setMeal(mealData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadMealDetails();
  }, [loadMealDetails]);

  return (
    <main>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {meal && <MealDetailDisplay meal={meal} />}
    </main>
  );
};

export default MealDetail;
