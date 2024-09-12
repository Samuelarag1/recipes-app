import React from "react";

interface IModalProps {
  onHide?: () => void;
}
function ModalAdd({ onHide }: IModalProps) {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="h-72 w-80 flex flex-col items-center bg-blue-800 shadow-xl shadow-black m-2 rounded-xl border border-blue-950 ">
      <button
        className=" ml-auto mr-2 mt-2 bg-red-700 rounded-full text-white h-10 w-10 text-md shadow-lg shadow-black border border-black"
        onClick={onHide}
      >
        X
      </button>
      <div className="flex mt-5 gap-2">
        <input
          type="text"
          placeholder="Busca un alimento"
          autoFocus={!isMobile}
          className="outline-none rounded-full p-1 focus:outline text-xs w-52 shadow-md shadow-black"
        />
        <button className="bg-blue-950 text-white rounded-full p-2 text-xs shadow-md shadow-black">
          Buscar
        </button>
      </div>
    </div>
  );
}

export default ModalAdd;
