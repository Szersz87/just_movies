import React from "react";
import Hero from "../hero/Hero";
import useMovies from "../../../shared/Api";
import MovieList from "../../../shared/MovieList/MovieList";

export default function HomePage() {
  const actionMovies = useMovies("Action");
  const comedyMovies = useMovies("Comedy");
  const thrillerMovies = useMovies("Thriller");
  const sciMovies = useMovies("ScinceFiction");

  return (
    <>
      <Hero />
      <div className="BoxForMovies">
        <MovieList title="Action & Adventure" movies={actionMovies.movies} />
        <MovieList title="Comedy" movies={comedyMovies.movies} />
        <MovieList title="Thriller" movies={thrillerMovies.movies} />
        <MovieList title="Sci-Fi & Fantasy" movies={sciMovies.movies} />
      </div>
    </>
  );
}
