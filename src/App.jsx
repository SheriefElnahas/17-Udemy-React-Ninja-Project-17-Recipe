import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Recipes from './components/Recipes';
import CreateRecipe from './components/CreateRecipe';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const getSearchTerm = (searchTerm) => {
    setSearchValue(searchTerm);
  };
  return (
    <React.Fragment>
      <Header getSearchTerm={getSearchTerm} />
      <main>
        <Routes>
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/" element={<Recipes searchValue={searchValue} />} />
          <Route path="/recipe">
            <Route path=":recipeId" element={<RecipeDetails />} />
          </Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
