import './Recipe.css';

function CreateRecipe() {
  return (
    <form className="Create-Recipe">
      <h2 className="Create-Recipe-heading">Add a New Recipe</h2>
      <p>
        <label htmlFor="title">Recipe Title:</label>
        <input type="text" id="title" />
      </p>
      <p>
        <label htmlFor="ingredients">Recipe Ingredients</label>
        <input className="Create_Recipe-ingredients__input" type="text" id="ingredients" />
        <button className="Create-Recipe-btn__add">Add</button>
        <small className="Create-Recipe-ingredients__pargraph">Current Ingredients: </small>
      </p>
      <p>
        <label htmlFor="recipe-method">Recipe Method: </label>
        <textarea name="recipe-method" id="recipe-method" cols="40.5" rows="3"></textarea>
      </p>
      <p>
        <label htmlFor="time">Cooking Time(minutes)</label>
        <input type="number" id="time" />
      </p>
      <button className="Create-Recipe-btn__submit">Submit</button>
    </form>
  );
}

export default CreateRecipe;
