//Componente Raiz
//se conecta todo
import { useState } from "react";
import { useWatchlist } from "./hooks/useWatchlist";
import Header from "./components/Header";
import FavoritosModal from "./components/FavoritosModal";
import Home from "./pages/Home";

function App() {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header onOpenModal={() => setIsModalOpen(true)} />
        <main className="pt-24 sm:pt-32  bg-gray-200">
          <Home addToWatchlist={addToWatchlist} />
          <FavoritosModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            watchlist={watchlist}
            removeFromWatchlist={removeFromWatchlist}
          />
        </main>
      </div>
    </>
  );
}

export default App;
