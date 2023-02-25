import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Recipes from './components/Recipes';
import CreateRecipe from './components/CreateRecipe';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const getSearchTerm = (searchTerm) => {
    setSearchValue(searchTerm);
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/recipes').then((jsonResponse) => setRecipes(jsonResponse));
  }, []);

  const filteredRecipes = recipes.data?.filter((recipe) => recipe.title.includes(searchValue));

  return (
    <React.Fragment>
      <Header getSearchTerm={getSearchTerm} />
      <main>
        <Routes>
          <Route path="/create-recipe" element={<CreateRecipe id={recipes.data?.length + 1} />} />
          <Route path="/" element={<Recipes recipes={filteredRecipes} searchValue={searchValue} />} />
          <Route path="/recipe">
            <Route path=":recipeId" element={<RecipeDetails />} />
          </Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
