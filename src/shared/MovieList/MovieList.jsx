import React from "react";
import PropTypes from "prop-types";
import ReusableMovieList from "./ReusableMovieList"

function MovieList({title,  movies }) {
  const filterByCategory = ['Action', 'Comedy', 'Thriller','ScinceFiction' ] ;
  return (
    <ReusableMovieList title={title} movies={movies} filterByCategory={filterByCategory}/>
  );
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  filterByCategory: PropTypes.string,
};

export default MovieList;
