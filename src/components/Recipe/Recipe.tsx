"use client";
import { useState } from "react";

const images = [
  { id: 1, name: "Tomato", src: "/images/tomato.png" },
  { id: 2, name: "Chicken", src: "/images/chicken.png" },
  { id: 3, name: "Garlic", src: "/images/garlic.png" },
  { id: 4, name: "Basil", src: "/images/basil.png" },
];

const Recipe = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState("");

  const handleSelect = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const generateRecipe = async () => {
    const response = await fetch("/api/generate-recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients: selectedIngredients }),
    });

    const data = await response.json();
    setRecipe(data.recipe);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Select Ingredients</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className={`cursor-pointer border p-2 ${
              selectedIngredients.includes(img.name) ? "border-green-500" : ""
            }`}
            onClick={() => handleSelect(img.name)}
          >
            <img src={img.src} alt={img.name} width={100} height={100} />
            <p className="text-center mt-2">{img.name}</p>
          </div>
        ))}
      </div>
      <button
        onClick={generateRecipe}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Generate Recipe
      </button>
      {recipe && <div className="mt-4 p-4 border">{recipe}</div>}
    </div>
  );
};

export default Recipe;
