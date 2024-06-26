import HomeOptions from "../components/HomeOptions";

const HomePage = () => {
  return (
    <>
      <h1 className="text-6xl md:text-7xl">Bienvenido</h1>
      <h2 className="text-xl md:text-2xl mt-1 mb-10 text-aqclOrange-500 uppercase font-semibold">
        Gerenciamiento diario AquaChile
      </h2>
      <HomeOptions />
    </>
  );
};

export default HomePage;
