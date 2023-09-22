import React from "react";
import MovieListContinue from "../../../shared/MovieList";
import MovieListPopular from "../../../shared/MovieList";

const Movies = () => {
  return(
  <div className="BoxForMovies">
    <MovieListContinue title="Continume to Watch"/>
    <MovieListPopular title="Popular on JustMovies" />
  </div>);
};

export default Movies;
