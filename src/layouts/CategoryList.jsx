import React from "react";
import "./CategoryList.scss";

export default function Category({filteredCategory}) {

    const onCategory = (category) => {
        filteredCategory(category)
    }

  return (
    <ul>
      <li onClick={(event) => onCategory(event.target.textContent)}>Recent</li>
      <li onClick={(event) => onCategory(event.target.textContent)}>Top 50</li>
      <li onClick={(event) => onCategory(event.target.textContent)}>Chill</li>
      <li onClick={(event) => onCategory(event.target.textContent)}>R&B</li>
      <li onClick={(event) => onCategory(event.target.textContent)}>Festival</li>
    </ul>
  );
}
