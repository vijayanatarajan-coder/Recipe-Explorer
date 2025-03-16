import React from "react";
import "./MealDetailDisplay.css";
const MealDetailDisplay = ({ meal }) => {
  return (
    <article className="meal-detail">
      {/* Header Section */}
      <header className="meal-header">
        <h1>{meal.strMeal}</h1>
        <figure className="meal-figure">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="meal-img"
          />
        </figure>
      </header>

      {/* Info Section */}
      <section className="meal-info">
        <h2>Meal Information</h2>
        <p>
          <strong>Category:</strong> {meal.strCategory}
        </p>
        <p>
          <strong>Area:</strong> {meal.strArea}
        </p>
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          {Object.keys(meal)
            .filter((key) => key.startsWith("strIngredient") && meal[key])
            .map((key, index) => (
              <li key={index}>
                {meal[key]} - {meal[`strMeasure${key.slice(-1)}`]}
              </li>
            ))}
        </ul>
      </section>

      {/* Instructions Section */}
      <section className="instructions">
        <h2>Instructions</h2>
        <ol>
          {meal.strInstructions
            .split(/\d+\.\s/)
            .map((step, index) =>
              step.trim() ? <li key={index}>{step.trim()}</li> : null
            )}
        </ol>
      </section>
    </article>
  );
};

export default MealDetailDisplay;
