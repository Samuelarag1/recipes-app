import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-gradient-to-r from-blue-300  to-blue-800 `}
    >
      <div className="bg-black w-full p-2 h-20 text-white justify-center items-center flex">
        <div className="text-center text-xl font-bold ">
          <h1>¿Que podemos comer hoy?</h1>
        </div>
      </div>

      <div className="mt-60 flex gap-10">
        <div>
          <Link href={"/recipes"}>
            <button
              type="submit"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-800 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Nueva receta
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <section className="h-60 bg-black bg-opacity-50 mt-20 p-2 rounded-lg shadow-lg shadow-black ">
        <div className="mt-20">
          <span className="text-white">
            Aqui podras ver tus recetas creadas...
          </span>
        </div>
      </section>
      <footer className="fixed bottom-0 p-2 bg-blue-950 text-white w-full text-center">
        <p>Todos los derechos reservados 2024</p>
      </footer>
    </main>
  );
}
