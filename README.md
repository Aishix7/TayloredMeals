Taylored Meals 🍲
Introduction

Taylored Meals is a React-based recipe application designed for busy professionals like Taylor. The app allows users to discover recipes based on ingredients they already have at home. It also provides step-by-step cooking instructions and YouTube tutorial links for each recipe.

The goal of this app is to make cooking simpler, faster, and more personalized. Whether you want to cook based on your mood, available ingredients, or time constraints, Taylored Meals has got you covered!

User Persona

Name: Taylor
Occupation: Busy Professional
Need:

Wants to cook easily after a long day.

Looks for recipes based on available ingredients.

Needs step-by-step instructions or videos for guidance.

Wants a quick and user-friendly interface to make decisions faster.

Features

Ingredient-based Search:
Users can enter any ingredient, and the app fetches recipes containing that ingredient.

Recipe Cards:
Each recipe is displayed as a card with a thumbnail, title, and buttons for details.

Ingredients List Popup:
Clicking "Ingredients" shows a popup with the full list of ingredients and their measurements.

How-to Cook Popup:
Clicking "How-to" shows detailed cooking instructions and a YouTube link if available.

Responsive Layout:
Works on both desktop and mobile devices.

Demo

A live demo can be hosted on platforms like Netlify, Vercel, or CodeSandbox. Example:
[Insert your deployed link here]

Installation

Follow these steps to run the project locally:

Clone the repository:

git clone https://github.com/<your-username>/TayloredMeals.git
cd TayloredMeals


Install dependencies:

npm install


Start the development server:

npm start


Open your browser and visit:

http://localhost:3000

Technologies Used

React – Frontend library for building interactive UI.

Axios – For API calls.

Tailwind CSS – For responsive and modern styling.

TheMealDB API – Public API to fetch recipes and cooking instructions.

Lucide React – For search icon in the search bar.

API Integration

We use TheMealDB API to fetch recipes:

Search by ingredient:

https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}


Replace {ingredient} with the user input.

Get meal details by ID:

https://www.themealdb.com/api/json/v1/1/lookup.php?i={idMeal}


This provides detailed cooking instructions and YouTube links.

Project Structure
TayloredMeals/
│
├─ src/
│  ├─ api/
│  │  └─ PostApi.jsx      # Axios API calls
│  ├─ components/
│  │  ├─ IngredientsList.jsx
│  │  ├─ RecipeCard.jsx
│  │  ├─ RecipeDetails.jsx
│  │  └─ SearchBar.jsx
│  ├─ pages/
│  │  └─ RecipeList.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
│
├─ package.json
└─ README.md

How It Works

User enters an ingredient in the Search Bar.

handleSearch function in App.jsx calls getMeal API.

Recipes are displayed as Recipe Cards.

Clicking Ingredients triggers handleShowIngredients to fetch and display ingredient details in a popup.

Clicking How-to triggers handleShowDetails to fetch instructions and YouTube tutorial.

User can close popups with the X button.

Future Improvements

Add a filter for cuisine type or meal category.

Add favorite recipes feature.

Include cooking time and difficulty level for recipes.

Allow saving ingredients list for grocery shopping.
