import React from "react";
import Hero from "../hero/Hero";
import useMovies from "../../../shared/Api";
import MovieList from "../../../shared/MovieList"

export default function HomePage() {
  const thrillerMovies = useMovies("Action");
  const comedyMovies = useMovies("Comedy");
  const sciMovies = useMovies("Comedy");
  const actionMovies = useMovies("Comedy");

  return (
    <>
      <Hero />
      <div className="BoxForMovies">
        <MovieList title="Action & Adventure" movies={actionMovies} />
        <MovieList title="Comedy" movies={comedyMovies} />
        <MovieList title="Thriller" movies={thrillerMovies} />
        <MovieList title="Sci-Fi & Fantasy" movies={sciMovies} />
      </div>
    </>
  );
}

