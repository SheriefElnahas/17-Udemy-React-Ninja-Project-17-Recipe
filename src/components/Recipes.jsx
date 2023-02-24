import './Recipe.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import RecipeDetails from './RecipeDetails';

function Recipes({ searchValue }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/recipes').then((jsonResponse) => setRecipes(jsonResponse));
  }, []);

  const filteredRecipes = recipes.data?.filter((recipe) => recipe.title.includes(searchValue));

  return (
    // <section className="Recipes">
    //   {filteredRecipes?.map(({ id, title, description, method, cookingTime }) => {
    //     return <Recipe key={id} title={title} description={description} method={method} cookingTime={cookingTime} />;
    //   })}
    // </section>
    <RecipeDetails />
  );
}

export default Recipes;
