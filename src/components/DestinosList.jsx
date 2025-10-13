import DestinoCard from "./DestinoCard";
import destinos from "../api/destinos.json";

const DestinosList = ({ addToWatchlist }) => (
  <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-4 justify-center">
    {destinos.map((destino) => (
      <DestinoCard key={destino.id} destino={destino} addToWatchlist={addToWatchlist} />
    ))}
  </div>
);

export default DestinosList;