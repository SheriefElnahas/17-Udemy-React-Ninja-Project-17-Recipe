import React from 'react';
import { Link } from 'react-router-dom';

function Recipe({ title, description, cookingTime, id }) {
  return (
    <div className="Recipe">
      <h2 className="Recipe-title">{title}</h2>
      <p className="Recipe-time">{cookingTime} minutes to make</p>
      <p className="Recipe-description">{description.substr(1, 150)}...</p>
      <Link to={`/recipe/${id}`} className="Recipe-btn">
        Cook This
      </Link>
    </div>
  );
}

export default Recipe;
