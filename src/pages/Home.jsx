import React, { useContext } from "react";
import dbData from "../data/fotos.json";

//style - css
import "../assets/css/home.css";

//contexto
import { FavoritesContext } from "../components/FavoritesContext";

const Home = () => {
  console.log("data=>", dbData.photos);

  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const collectionImagen = dbData.photos;

  return (
    <>
      <div className="natural-contenedor__titulo">
        <h1>Natural Pic</h1>
      </div>
      <div className="natural-contenedor__galeria">
        {/* grilla de galeria */}
        <div className="natural-grilla__galeria">
          {collectionImagen.map((imagen) => (
            <div key={imagen.id} className="card mb-3 card-contenedor__imagen">
              <img
                src={imagen.src.small}
                className="card-img-top"
                alt={imagen.alt}
              />

              <div className="contenedor-text__alternativo">
                <p className="texto__alternativo">{imagen.alt}</p>
              </div>

              <div
                className="contenedor-btn__corazon"
                onClick={() =>
                  favorites.find((fav) => fav.id === imagen.id)
                    ? removeFavorite(imagen.id)
                    : addFavorite(imagen)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={`boton-natural boton-${
                      favorites.find((fav) => fav.id === imagen.id)
                        ? "favorito"
                        : "nofavorito"
                    }`}
                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
