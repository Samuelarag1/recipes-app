import IngredientList from "@/components/IngredientsList";
import SearchBar from "@/components/SearchBar";
import React from "react";

interface IModalProps {
  onHide?: () => void;
}
function ModalAdd({ onHide }: IModalProps) {
  return (
    <div className="h-72 w-80 flex flex-col items-center bg-blue-800 shadow-xl shadow-black m-2 rounded-xl border border-blue-950 overflow-scroll">
      <button
        className=" ml-auto mr-2 mt-2 bg-red-700 rounded-full text-white w-7 text-md shadow-lg shadow-black border border-black"
        onClick={onHide}
      >
        X
      </button>
      <div className="flex mt-5 gap-2">
        <SearchBar />
        <button className="bg-blue-950 text-white rounded-full p-2 text-xs shadow-md shadow-black">
          Buscar
        </button>
      </div>
      <IngredientList />
    </div>
  );
}

export default ModalAdd;
