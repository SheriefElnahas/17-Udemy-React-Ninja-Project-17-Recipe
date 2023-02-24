import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Recipes from './components/Recipes';
import CreateRecipe from './components/CreateRecipe';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const getSearchTerm = (searchTerm) => {
    setSearchValue(searchTerm);
  };
  return (
    <React.Fragment>
      <Header getSearchTerm={getSearchTerm} />
      <main>
        <div className="container">{/* <Recipes searchValue={searchValue} /> */}</div>
        <Routes>
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/" element={<Recipes searchValue={searchValue} />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
