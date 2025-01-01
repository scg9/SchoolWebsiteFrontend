import React from 'react';
import './index.css';

const Categories = ({ categories, selectedCategory, onCategoryClick }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-button ${
            selectedCategory === category ? 'active' : ''
          }`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
