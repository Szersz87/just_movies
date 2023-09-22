import React from "react";
import Hero from "../hero/Hero";
import MovieListContinue from "../../../shared/MovieList";
import MovieListPopular from "../../../shared/MovieList";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="BoxForMovies">
        <MovieListContinue title="Continume to Watch" />
        <MovieListPopular title="Popular on JustMovies" />
      </div>
    </div>
  );
}
