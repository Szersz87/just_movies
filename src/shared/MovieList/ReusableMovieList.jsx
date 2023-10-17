import React from "react";
import AddToListButton from "../MyListButton"
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";


export default function ReusableMovieList ({title, movies, filterByCategory}) {
  const filteredMovies = Array.isArray(movies)
    ? filterByCategory
      ? movies.filter((movie) => movie.category.attributes.term === title)
      : movies
    : [];

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidersToShow: 6,
      slidersToScroll: 1,
    };

    return (
    <div className="Container">
      <h2>{title}</h2>
      <div className="movieList">
          <Slider {...sliderSettings}>
            <div className="test">
         {filteredMovies.lenght !== 0 &&  filteredMovies.map((movie) => (
          <div key={uuidv4()} className="movieTile">
            <a key={uuidv4()} href={movie.link[1].attributes.href} target="_blank" rel="noreferrer">
            <img
              src={movie["im:image"][2].label}
              alt={movie["im:name"].label}
            />
            </a>
              <AddToListButton movie={movie} />
           </div>
           
        ))}
        </div>
        </Slider>

    </div>
      </div>
    )
}
ReusableMovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  filterByCategory: PropTypes.string,
}