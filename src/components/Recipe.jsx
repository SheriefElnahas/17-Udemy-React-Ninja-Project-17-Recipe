import React from 'react';

function Recipe({ title, time, description }) {
  return (
    <div className="Recipe">
      <h2 className="Recipe-title">{title}</h2>
      <p className="Recipe-time">{time} minutes to make</p>
      <p className="Recipe-description">{description}</p>
      <button className="Recipe-btn">Cook This</button>
    </div>
  );
}

export default Recipe;
