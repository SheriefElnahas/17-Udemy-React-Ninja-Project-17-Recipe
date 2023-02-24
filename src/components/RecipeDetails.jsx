import './Recipe.css';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeDetails() {
  const [recipe, setRecipe] = useState('');
  const params = useParams();

  const recipeId = params.recipeId;
  useEffect(() => {
    axios.get(`http://localhost:3000/recipes/${recipeId}`).then((res) => setRecipe(res));
  }, []);

  return (
    <div className="Recipe-Details">
      {/* {recipe} */}
      {recipe && (
        <div>
          <h2 className="Recipe-Details-heading">{recipe.data.title}</h2>
          <p className="Recipe-Details-time">Takes: {recipe.data.cookingTime} mintues to cook</p>
          <p className="Recipe-Details-description">{recipe.data.description}</p>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
