import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import AddToListButton from "../AddToListButton";
import PropTypes from "prop-types";
import useMovies from "../../shared/Api";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ReusableMovieList = ({ title }) => {
  const { getRandomMovies, movies } = useMovies(null, true);

  const allMovies = useMemo(() => {
    return title === "Random Movies" || !Array.isArray(movies)
      ? getRandomMovies(10)
      : movies.filter((movie) => movie.category.attributes.term === title);
  }, [title, movies]);

  return (
    <div className="Container">
      <h2>{title}</h2>
      <div className="movieList">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          breakpoints={{
            370: {
              width: 370,
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              width: 1200,
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {allMovies &&
            allMovies.length !== 0 &&
            allMovies.map((movie) => (
              <SwiperSlide key={uuidv4()}>
                <div key={uuidv4()} className="movieTile">
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
};

ReusableMovieList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ReusableMovieList;
