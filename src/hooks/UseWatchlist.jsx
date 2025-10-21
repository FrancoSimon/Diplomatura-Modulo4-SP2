//Hook personalizado

import { useState, useEffect } from "react";

// Gestionar estado global de favoritos
export const useWatchlist = () => {
  //NICIALIZACIÓN: Cargar desde localStorage al montar
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist"); // LEER
    return saved ? JSON.parse(saved) : [];
  });

  // Persistir en localStorage
  //Guardar en localStorage cuando cambia watchlist
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist)); //escribir
  }, [watchlist]); //Dependencia, cuando watchlist cambie

   // Funciones para agregar/remover

  const addToWatchlist = (destino) => {
    if (!watchlist.some((item) => item.id === destino.id)) {
      setWatchlist([...watchlist, destino]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((item) => item.id !== id));
  };

  return { watchlist, addToWatchlist, removeFromWatchlist };
};
