import React from "react";
import useMovies from "./Api";

function MovieList({ title, className }) {
  const movies = useMovies();

  return (
    <div className={className}>
      <h2>{title}</h2>
      <div className="movieList">
        {movies.map((movie, index) => (
          <div key={index} className="movieTile">
            <img src={movie["im:image"][2].label} alt={movie["im:name"].label} />
            <h3>{movie["im:name"].label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
