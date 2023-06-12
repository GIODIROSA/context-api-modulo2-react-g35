import React, { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";

//css
import "../assets/css/favorite.css";

const Favoritos = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <>
      <div className="favoritos-contenedor__titulo">
        <h1>Fotos Favoritas</h1>
      </div>
      <div className="favorito-contenedor__galeria">
        <div className="favorito-grilla__galeria">

          {favorites.length === 0 && (
            <article>No hay Favoritos señalados. Seleccione</article>
          )}

          {/* inicio iteracion de favoritos */}
          {favorites.map((imagen) => (
            <div
              key={imagen.id}
              className="card mb-3 favorito-contenedor__imagen"
              style={{ maxWidth: "540px" }}
            >
              <img
                src={imagen.src.small}
                className="card-img-top"
                alt={imagen.id}
              />
            </div>
          ))}
          {/* final iteracion de favoritos */}
        </div>
      </div>
    </>
  );
};

export default Favoritos;
