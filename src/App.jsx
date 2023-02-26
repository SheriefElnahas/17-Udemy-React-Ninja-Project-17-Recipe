import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
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

  const fetchRecipes = useCallback(() => {
    axios.get('http://localhost:3000/recipes').then((jsonResponse) => setRecipes(jsonResponse));
  }, []);

  useEffect(() => {
    // axios.get('http://localhost:3000/recipes').then((jsonResponse) => setRecipes(jsonResponse));
    // console.log(recipes);
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.data?.filter((recipe) => recipe.title.toLowerCase().includes(searchValue));

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
