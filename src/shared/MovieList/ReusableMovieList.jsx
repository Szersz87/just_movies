import React from "react";
import { Link } from "react-router-dom";
import AddToListButton from "../AddToListButton";
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
      ? movies.filter((movie) => movie.category.attributes.term === title)
      : movies;
  }

  return (
    <div className="Container">
      <h2>{title}</h2>
      <div className="movieList">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          breakpoints={{
            
            640: {
              width: 640,
              slidesPerView: 3,
              spaceBetween: 10
            },
            
            768: {
              width: 768,
              slidesPerView: 4,
              spaceBetween: 20
            },
            1200: {
              width: 1200,
              slidesPerView: 5,
              spaceBetween: 30
            },
            1800: {
              width: 1900,
              slidesPerView: 9,
              spaceBetween: 40
            }
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {filteredMovies.length !== 0 &&
            filteredMovies.map((movie) => (
              <SwiperSlide key={uuidv4()}>
                <div key={uuidv4()} className="movieTile">
                  {console.log("Dane do przekazania:", movie)};
                  <Link to="/movie/MovieDetails" state={{ movieData: movie }}>
                    <img
                      src={movie["im:image"][2].label}
                      alt={movie["im:name"].label}
                    />
                  </Link>
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
