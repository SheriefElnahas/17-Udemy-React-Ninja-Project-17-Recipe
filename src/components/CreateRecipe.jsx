import './Recipe.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateRecipe(props) {
  const [formData, setFormData] = useState({ title: '', ingredients: '', description: '', cookingTime: '' });
  const [recipe, setRecipe] = useState({});
  const [id, setId] = useState(props.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (recipe.title) {
      axios.post('http://localhost:3000/recipes', recipe);
      navigate('/');
    }
  }, [recipe, id]);

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setId((prevId) => prevId + 1);

    const recipe = {
      id: id,
      title: formData.title,
      ingredients: formData.ingredients,
      description: formData.description,
      cookingTime: formData.cookingTime,
    };

    setRecipe(recipe);
    setFormData({ title: '', ingredients: '', description: '', cookingTime: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="Create-Recipe">
      <h2 className="Create-Recipe-heading">Add a New Recipe</h2>
      <p>
        <label htmlFor="title">Recipe Title:</label>
        <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="ingredients">Recipe Ingredients</label>
        <input className="Create_Recipe-ingredients__input" type="text" id="ingredients" value={formData.ingredients} onChange={handleChange} name="ingredients" />
        <button className="Create-Recipe-btn__add">Add</button>
        <small className="Create-Recipe-ingredients__pargraph">Current Ingredients: </small>
      </p>
      <p>
        <label htmlFor="recipe-description">Recipe Method: </label>
        <textarea value={formData.description} onChange={handleChange} name="description" id="recipe-description" cols="40.5" rows="3"></textarea>
      </p>
      <p>
        <label htmlFor="time">Cooking Time(minutes)</label>
        <input value={formData.cookingTime} onChange={handleChange} name="cookingTime" type="number" id="time" />
      </p>

      {/* <Link to="/"> */}
      <button className="Create-Recipe-btn__submit">Submit</button>
      {/* </Link> */}
    </form>
  );
}

export default CreateRecipe;
