/* eslint-disable @next/next/no-img-element */

import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const IngredientList: React.FC = () => {
  const filteredIngredients = useSelector(
    (state: RootState) => state.ingredients.filteredIngredients
  );

  return (
    <div>
      {filteredIngredients.length > 0 ? (
        filteredIngredients.map((ingredient, index) => (
          <div key={index}>
            <div className="flex items-center justify-between w-72 mt-2">
              <p className="w-64 truncate">{ingredient.name}</p>
              <input type="checkbox" className="h-5 w-5 rounded-full" />
            </div>
          </div>
        ))
      ) : (
        <p>No se encontraron ingredientes</p>
      )}
    </div>
  );
};

export default IngredientList;
