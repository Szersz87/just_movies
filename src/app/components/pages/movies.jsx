import React from "react";
import MovieListContinue from "../../../shared/MovieList";
import MovieListPopular from "../../../shared/MovieList";

const Movies = () => {
  return(
  <div className="BoxForMovies">
    <MovieListContinue title="Continume to Watch" className="Container" />
    <MovieListPopular title="Popular on JustMovies" className="Container" />
  </div>);
};

export default Movies;
