import React from "react";
import "./Category.scss";

export default function Category({ imageSrc, title, subtitle }) {
  return (
    <div className="category-container">
      <img src={`/assets/${imageSrc}.png`} alt="music category" />
      <section>
        <h2 className="poppins-regular">{title}</h2>
        <h3 className="poppins-regular">{subtitle}</h3>
      </section>
    </div>
  );
}
