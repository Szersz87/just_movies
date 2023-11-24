import React from "react";
import PropTypes from "prop-types";
import ReusableMovieList from "./ReusableMovieList"

function MovieList({title,  movies }) {
  
  return (
    <ReusableMovieList title={title} movies={movies}/>
  );
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MovieList;
