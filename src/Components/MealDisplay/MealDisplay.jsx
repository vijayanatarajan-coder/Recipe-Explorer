import React from "react";
import { FaYoutube } from "react-icons/fa";
import "./MealDisplay.css";
import { Link } from "react-router-dom";

const MealDisplay = ({ meals }) => {
  if (!Array.isArray(meals)) return <div>Loading meals...</div>;

  return (
    <section className="recipe-grid">
      {meals.length > 0 ? (
        meals.map((meal) => (
          <Link
            to={`/meal/${meal.idMeal}`}
            key={meal.idMeal}
            className="recipe-link-wrapper"
          >
            <article className="recipe-card">
              <figure>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="recipe-image"
                />
                <figcaption className="recipe-name">{meal.strMeal}</figcaption>
              </figure>
              <p className="recipe-category">{meal.strCategory}</p>
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-link flex"
                onClick={(e) => e.stopPropagation()}
              >
                Watch Recipe <FaYoutube className="youtube" />
              </a>
            </article>
          </Link>
        ))
      ) : (
        <p role="alert">No recipes found. Try a different search.</p>
      )}
    </section>
  );
};

export default MealDisplay;
