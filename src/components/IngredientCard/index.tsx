/* eslint-disable @next/next/no-img-element */
// IngredientCard.tsx
import React from "react";

interface Ingredient {
  name: string;
  image: string;
}

interface IngredientCardProps {
  ingredient: Ingredient;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={ingredient.image}
        alt={ingredient.name}
        style={{ width: "100px", height: "100px" }}
      />
      <h3>{ingredient.name}</h3>
    </div>
  );
};

export default IngredientCard;
