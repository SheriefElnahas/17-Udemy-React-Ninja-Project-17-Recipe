import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './UI/Header';
import RecipeList from './recipe/RecipeList';
import CreateRecipe from './recipe/CreateRecipe';
import RecipeDetails from './recipe/RecipeDetails';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/recipes').then((jsonResponse) => setRecipes(jsonResponse));
  }, []);

  // Get Search Term from child component ( header )
  const getSearchTerm = (searchTerm) => {
    setSearchValue(searchTerm);
  };

  // get a filtered recipes array based on the search value
  const filteredRecipes = recipes.data?.filter((recipe) => recipe.title.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  return (
    <React.Fragment>
      <Header getSearchTerm={getSearchTerm} />
      <main>
        <Routes>
          <Route path="/create-recipe" element={<CreateRecipe previousRecipeId={recipes.data?.length + 1} />} />
          <Route path="/" element={<RecipeList filteredRecipes={filteredRecipes} />} />
          <Route path="/recipe">
            <Route path=":recipeId" element={<RecipeDetails />} />
          </Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
