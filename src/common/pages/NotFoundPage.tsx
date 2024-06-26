import { Button } from "flowbite-react";

const NotFoundPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-aqcl-600 dark:text-aqcl-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Oops... Algo salió mal
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            No pudimos encontrar lo que buscabas. Encontrarás mucho que explorar
            en la página principal.{" "}
          </p>
          <a
            href="/"
            className="inline-flex text-white bg-aqcl-500 hover:bg-aqcl-800 focus:ring-4 focus:outline-none focus:ring-aqcl-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-aqcl-900 my-4"
          >
            Volver al Inicio
          </a>
          <Button color="enterprise">Hola</Button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
