import './Recipe.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateRecipe({ previousRecipeId }) {
  const [recipeData, setRecipeData] = useState({ title: '', ingredients: '', description: '', cookingTime: '' });
  const [newRecipe, setNewRecipe] = useState({});
  const [newId, setnewId] = useState(previousRecipeId);

  const navigate = useNavigate();

  useEffect(() => {
    const isRecipe = newRecipe.title && newRecipe.ingredients && newRecipe.description && newRecipe.cookingTime;

    // Only make the request and navigate if the recipe is created
    if (isRecipe) {
      axios.post('http://localhost:3000/recipes', newRecipe);
      navigate('/');
    }
  }, [newRecipe, newId]);

  const handleChange = (e) => {
    setRecipeData((prevRecipeData) => {
      return {
        ...prevRecipeData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Increment The Id By 1
    setnewId((prevId) => prevId + 1);

    // Extract all the values that the user had entered
    const { title, ingredients, description, cookingTime } = recipeData;

    // Construct A New Recipe
    const recipe = {
      id: newId,
      title,
      ingredients,
      description,
      cookingTime,
    };

    // Change the state and clear the form
    setNewRecipe(recipe);
    setRecipeData({ title: '', ingredients: '', description: '', cookingTime: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="Create-Recipe">
      <h2 className="Create-Recipe-heading">Add a New Recipe</h2>
      <p>
        <label htmlFor="title">Recipe Title:</label>
        <input type="text" name="title" id="title" value={recipeData.title} onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="ingredients">Recipe Ingredients</label>
        <input className="Create_Recipe-ingredients__input" type="text" id="ingredients" value={recipeData.ingredients} onChange={handleChange} name="ingredients" />
        <button className="Create-Recipe-btn__add">Add</button>
        <small className="Create-Recipe-ingredients__pargraph">Current Ingredients: </small>
      </p>
      <p>
        <label htmlFor="recipe-description">Recipe Method: </label>
        <textarea value={recipeData.description} onChange={handleChange} name="description" id="recipe-description" cols="40.5" rows="3"></textarea>
      </p>
      <p>
        <label htmlFor="time">Cooking Time(minutes)</label>
        <input value={recipeData.cookingTime} onChange={handleChange} name="cookingTime" type="number" id="time" />
      </p>

      <button className="Create-Recipe-btn__submit">Submit</button>
    </form>
  );
}

export default CreateRecipe;
