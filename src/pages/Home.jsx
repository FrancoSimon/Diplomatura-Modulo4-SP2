import DestinosList from "../components/DestinosList";

const Home = ({ addToWatchlist }) => {
  return (
    <>
      <section className="text-center py-10 px-6">
        <h1 className="text-3xl md:text-7xl font-bold text-black mb-2">
          Descubrí Fiambalá, Catamarca
        </h1>
        <p className=" mx-auto text-gray-700 text-2xl mb-7">
          Explora los destinos más emblemáticos de Fiambalá y sus alrededores:
          termas, dunas, bodegas, rutas y paisajes únicos del noroeste
          argentino. Agregá tus lugares favoritos a tu lista personal y
          planificá tu próxima aventura.
        </p>
        <DestinosList addToWatchlist={addToWatchlist} />
      </section>
    </>
  );
};

export default Home;
