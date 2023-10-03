import React from "react";
import PropTypes from "prop-types";

function MovieList({ title, movies }) {
  const filteredMovies = movies.filter((movie) => {
    return movie.category.attributes.term === title;
  });

  return (
    <div className="Container">
      <h2>{title}</h2>
      <div className="movieList">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movieTile">
            <img
              src={movie["im:image"][2].label}
              alt={movie["im:name"].label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MovieList;

