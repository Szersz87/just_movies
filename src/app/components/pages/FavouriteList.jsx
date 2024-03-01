import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { useMoviesLocalStorage }  from "../../../shared/Hooks/UseMoviesLocalStorage";

export default function FavouriteList() {
  const [savedMovies] = useMoviesLocalStorage("myList");

  return (
    <Swiper
      modules={[Navigation, Pagination, Parallax]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <div className="Container">
        <h2>My List</h2>
        <div className="movieList">
          {savedMovies.map((movie) => (
            <SwiperSlide key={uuidv4()}>
              <div key={uuidv4()} className="myListContainer">
                <h2 className="title">{movie.title}</h2>
                <div className="description">
                  <div className="image">
                    <img src={movie.imageUrl} alt={movie.title} />
                  </div>
                  <div className="text">
                    <h3>
                      {movie.description
                        ? movie.description
                        : "Description will be added soon ;)"}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </div>
    </Swiper>
  );
}
