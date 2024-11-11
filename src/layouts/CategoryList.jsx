import React, { useState } from "react";
import "./CategoryList.scss";

export default function Category({ filteredCategory }) {
  const [activeCategory, setActiveCategory] = useState("Recent");

  const categories = ["Recent", "Top 50", "Chill", "R&B", "Festival"];

  const onCategory = (category) => {
    setActiveCategory(category);
    filteredCategory(category);
  };

  return (
    <ul>
      {categories.map((category) => (
        <li
          key={category}
          className={`poppins-regular ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => onCategory(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
