//Tarjeta individual
import { Button } from "./Button";

// Componente para mostrar cada destino
export const DestinoCard = ({ destino, addToWatchlist }) => {
  return (
    <div className="bg-white max-w-xl mx-auto px-5 py-8 hover:shadow-2xl hover:scale-105 transition-transform rounded-3xl ">
      <img
        src={destino.imagen}
        alt={destino.nombre}
        className="w-full h-60"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-black text-2xl font-OpenSans drop-shadow-xl mb-4">
          {destino.nombre}
        </h3>
        <p className="text-lg text-gray-700 mb-3">{destino.descripcion}</p>
        <Button onClick={() => addToWatchlist(destino)} variant="primary">
          Agregar a favoritos
        </Button>
      </div>
    </div>
  );
};

export default DestinoCard;
