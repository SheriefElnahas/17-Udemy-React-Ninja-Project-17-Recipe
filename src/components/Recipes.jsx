import './Recipe.css';
import { useState, useEffect } from 'react';

import Recipe from './Recipe';

function Recipes({ recipes }) {
  return (
    <section className="Recipes">
      {recipes?.map(({ id, title, description, method, cookingTime }) => {
        return <Recipe key={id} title={title} description={description} method={method} cookingTime={cookingTime} id={id} />;
      })}
    </section>
  );
}

export default Recipes;
