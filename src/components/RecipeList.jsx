import './Recipe.css';
import Recipe from './Recipe';

function RecipeList({ filteredRecipes }) {
  return (
    <section className="RecipeList">
      {filteredRecipes?.map(({ id, title, description, method, cookingTime }) => {
        return <Recipe key={id} title={title} description={description} method={method} cookingTime={cookingTime} id={id} />;
      })}
    </section>
  );
}

export default RecipeList;
