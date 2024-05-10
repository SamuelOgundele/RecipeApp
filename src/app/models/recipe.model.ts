export interface Recipe {
  meals: string;
  idMeal: string;                // Unique identifier for the meal
  strMeal: string;               // Name of the meal
  strInstructions: string;       // Cooking instructions
  strMealThumb?: string;         // URL to the meal's thumbnail image
  strIngredients?: string[];     // List of ingredients
  strTags?: string;              // Tags related to the meal, separated by commas
  strCategory?: string;          // Category of the meal
  strArea?: string;              // Geographic area of the meal's origin
  strSource?: string;            // Original source of the recipe
  strYoutube?: string;           // YouTube link for the cooking video
  response: any;
}

