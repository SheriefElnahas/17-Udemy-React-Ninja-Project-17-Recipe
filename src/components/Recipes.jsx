import './Recipe.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './Recipe';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/recipes').then((jsonResponse) => setRecipes(jsonResponse));
  }, []);
  console.log(recipes.data);

  // "id": "1",
  // "title": "Veggie Stew",
  // "ingredients": ["1 Carrot", "1 Leek", "200g Tofu", "300ml Veg stock"],
  // "method": "1. Pre-heat the oven to 200C/3C/gas 5. Place the carrot, leek and tofu in a large bowl. Add the stock and mix well. 2. Add the rest of the ingredients and mix well. 3. Place the mixture in a large bowl and cover with a lid. 4. Place the lid on the oven and cook for 40 minutes. 5. Serve with a slaw of your choice",
  // "cookingTime": "45 minutes"

  return (
    <section className="Recipes">
      {recipes.data &&
        recipes.data.map(({ id, title, description, method, cookingTime }) => {
          return <Recipe key={id} title={title} description={description} method={method} cookingTime={cookingTime} />;
        })}
      {/* <Recipe title={'Veggie Stew'} time={'45'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat atque odio sit ipsa eveniet vitae a deleniti accusamus eligendi provident!'} />
      <Recipe title={'Veggie Stew'} time={'45'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat atque odio sit ipsa eveniet vitae a deleniti accusamus eligendi provident!'} />
      <Recipe title={'Veggie Stew'} time={'45'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat atque odio sit ipsa eveniet vitae a deleniti accusamus eligendi provident!'} /> */}
    </section>
  );
}

export default Recipes;
