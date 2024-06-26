import { Button } from "flowbite-react";
import { homePath } from "../router/routes-paths";

const notFoundTexts = {
  code: "404",
  title: "Oops... Algo salió mal",
  description:
    "No pudimos encontrar lo que buscabas. Encontrarás mucho que explorar en la página principal.",
  button: "Volver a la página principal",
};

const NotFoundPage = () => {
  return (
    <section className="bg-white items-center w-full h-dvh flex flex-col justify-center px-5 text-center">
      <h1 className="mb-4 tracking-tight font-extrabold text-8xl lg:text-9xl text-aqcl-600 dark:text-aqcl-500">
        {notFoundTexts.code}
      </h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
        {notFoundTexts.title}
      </p>
      <p className="mb-4 text-lg text-gray-500 text-wrap">
        {notFoundTexts.description}
      </p>
      <Button
        className="mx-auto w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
        color="enterprise"
        href={homePath}
      >
        {notFoundTexts.button}
      </Button>
    </section>
  );
};

export default NotFoundPage;
