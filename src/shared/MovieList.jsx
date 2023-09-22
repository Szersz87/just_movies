import React from "react";
import useMovies from "./Api";

function MovieList({ title }) {
  const movies = useMovies();

  return (
    <div className="Container">
      <h2>{title}</h2>
      <div className="movieList">
        {movies.map((movie, index) => (
          <div key={index} className="movieTile">
            <img src={movie["im:image"][2].label} alt={movie["im:name"].label} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
