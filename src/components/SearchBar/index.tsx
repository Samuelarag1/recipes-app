// components/SearchBar.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { filterIngredients } from "@/features/ingredientsSlice";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    dispatch(filterIngredients(searchTerm));
  };

  return (
    <input
      type="text"
      onChange={handleSearch}
      placeholder="Buscar ingredientes"
      className="outline-none rounded-full p-1 focus:outline text-xs w-52 shadow-md shadow-black"
    />
  );
};

export default SearchBar;
