const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// __________________  function to fetch data and handle errors
const fetchData = async (url, errorMessage) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${errorMessage}`, error);
    throw new Error(errorMessage || "Something went wrong.");
  }
};

// ___________________ Fetch multiple random meals in parallel
export const fetchRandomMeals = async (count = 6) => {
  try {
    const mealRequests = Array.from({ length: count }, () =>
      fetch(`${API_BASE_URL}/random.php`)
    );
    const responses = await Promise.all(mealRequests);

    const meals = await Promise.all(
      responses.map(async (res) => {
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        return data.meals[0];
      })
    );

    return meals;
  } catch (error) {
    console.error("Failed to fetch random meals:", error);
    throw new Error("Failed to fetch random meals.");
  }
};

// __________________ Search meals by name
export const searchByName = async (name) => {
  return fetchData(
    `${API_BASE_URL}/search.php?s=${name}`,
    "Search by name failed."
  );
};

// ______________ Search meals by first letter
export const searchByFirstLetter = async (letter) => {
  return fetchData(
    `${API_BASE_URL}/search.php?f=${letter}`,
    "Search by first letter failed."
  );
};

// _________________ Search meals by ingredient
export const searchByIngredient = async (ingredient) => {
  return fetchData(
    `${API_BASE_URL}/filter.php?i=${ingredient}`,
    "Search by ingredient failed."
  );
};

// __________________ Fetch meal categories
export const fetchCategories = async () => {
  const data = await fetchData(
    `${API_BASE_URL}/list.php?c=list`,
    "Failed to fetch categories."
  );
  return data.meals || [];
};

// __________________ Fetch meals by category
export const fetchMealsByCategory = async (category) => {
  const data = await fetchData(
    `${API_BASE_URL}/filter.php?c=${category}`,
    "Failed to fetch meals by category."
  );
  return data.meals || [];
};

// _______________Fetch meal by ID
export const fetchMealById = async (id) => {
  const data = await fetchData(
    `${API_BASE_URL}/lookup.php?i=${id}`,
    `Failed to fetch meal details for ID: ${id}`
  );
  if (!data.meals) throw new Error("Meal not found. Please check the ID.");
  return data.meals[0];
};
