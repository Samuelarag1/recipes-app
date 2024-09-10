import ButtonAdd from "@/components/Buttons/ButtonAdd";

export default function RecipeHome() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-gradient-to-r from-blue-300  to-blue-800 `}
    >
      <div className="bg-black w-full p-2 h-20 text-white justify-center items-center flex">
        <div className="text-center text-xl font-bold ">
          <h1>¿Que podemos comer hoy?</h1>
        </div>
      </div>

      <div className="bg-black rounded-lg mt-20 shadow shadow-black m-2 lg:h-20 lg:flex lg:items-center  ">
        <p className="text-md text-white text-center">
          Necesitamos agregar aunque sea 2 ingredientes para poder crear una
          receta.
        </p>
      </div>

      <div className="mt-20 flex gap-10 flex-col items-center bg-blue-950 p-4 rounded-lg  shadow-lg shadow-black">
        <p className="text-white">Agregar nuevos ingredientes</p>
        <ButtonAdd />
      </div>

      <section className="h-60 bg-black bg-opacity-50 mt-20 p-2 rounded-lg shadow-lg shadow-black ">
        <div className="mt-20">
          <span className="text-white">
            Aca podras ver tus ingredientes agregados...
          </span>
        </div>
      </section>

      <footer className="absolute bottom-0 p-2 bg-blue-950 text-white w-full text-center">
        <p>Todos los derechos reservados 2024</p>
      </footer>
    </main>
  );
}
