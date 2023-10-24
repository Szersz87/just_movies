import React from "react";
import AddToListButton from "../MyListButton";
import PropTypes from "prop-types";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ReusableMovieList({ title, movies }) {
  let filteredMovies;
  
  if (title === "Random Movies") {
    filteredMovies = movies;
  } else {
    filteredMovies = Array.isArray(movies)
    ? movies.filter((movie) => movie.category.attributes.term === title) : movies;
  }
  return (
    <div className="Container">
      <h2>{title}</h2>
      <div className="movieList">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={2}
          slidesPerView={8}
          navigation
          pagination={{ clickable: true }}
        >
          {filteredMovies.length !== 0 &&
            filteredMovies.map((movie) => (
              <SwiperSlide key={uuidv4()}>
                <div key={uuidv4()} className="movieTile">
                  <a
                    key={uuidv4()}
                    href={movie.link[1].attributes.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={movie["im:image"][2].label}
                      alt={movie["im:name"].label}
                    />
                  </a>
                  <AddToListButton movie={movie} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
ReusableMovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  
};
