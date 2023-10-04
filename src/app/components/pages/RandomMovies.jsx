import React from "react";
import MovieList from "../../../shared/MovieListRandom";
import useMovies from "../../../shared/Api";

export default function RandomMovies() {
  const { getRandomMovies } = useMovies(null, true);

  const randomMovies = getRandomMovies(10);

  return (
    <>
      <div className="BoxForMovies">
        <MovieList title="Random Movies" movies={randomMovies} />
      </div>
    </>
  );
}
