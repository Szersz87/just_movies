import React from "react";
import PropTypes from "prop-types";
import ReusableMovieList from "./ReusableMovieList"

function MovieListRandom({title,  movies }) {
  
  return (
    <ReusableMovieList title={title} movies={movies} />
  );
}

MovieListRandom.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MovieListRandom;
