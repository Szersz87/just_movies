import React from "react";
import AddToListButton from "../MyListButton"
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";


export default function ReusableMovieList ({title, movies, filterByCategory}) {
  const filteredMovies = Array.isArray(movies)
    ? filterByCategory
      ? movies.filter((movie) => movie.category.attributes.term === title)
      : movies
    : [];
    return (
        <div className="Container">
      <h2>{title}</h2>
      <div className="movieList">
        {filteredMovies.map((movie) => (
          <div key={uuidv4()} className="movieTile">
            <img
              src={movie["im:image"][2].label}
              alt={movie["im:name"].label}
            />
              <AddToListButton movie={movie} />
          </div>
        ))}
      </div>
    </div>
    )
}
ReusableMovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  filterByCategory: PropTypes.string,
}