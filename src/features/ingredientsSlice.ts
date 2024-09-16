// features/ingredientsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ingredientsData from "@/data/data.json";

interface Ingredient {
  name: string;
}

interface IngredientsState {
  ingredients: Ingredient[];
  filteredIngredients: Ingredient[];
}

const initialState: IngredientsState = {
  ingredients: ingredientsData,
  filteredIngredients: ingredientsData,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    filterIngredients: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      state.filteredIngredients = state.ingredients.filter((ingredient) => {
        const ingredientName = ingredient.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        return ingredientName.includes(searchTerm);
      });
    },
  },
});

export const { filterIngredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
