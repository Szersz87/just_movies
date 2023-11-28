import React, { useState, useEffect } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import PropTypes from "prop-types";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import useMoviesLocalStorage from "./Hooks/UseMoviesLocalStorage";
// import { removeMovie } from "./Hooks/MovieActionsHelper"

function AddToListButton({ movie }) {
  const [moviesList, setMoviesList, addMovies] = useMoviesLocalStorage("myList", []);

  const isMovieExist = (id) => {
    return moviesList.some((item) => item.title === id);
  };

  const [isMovieLiked, setIsLiked] = useState(() =>
    isMovieExist(movie["im:name"].label),
  );

  useEffect(() => {
    setIsLiked(isMovieExist(movie["im:name"].label));
  }, [movie, moviesList]);

  const handleAddToListClick = () => {
    isMovieLiked ? removeMovie(movie["im:name"].label) : addMovie(movie);
    setIsLiked(!isMovieLiked);
  };

  const removeMovie = (id) => {
    const updatedList = moviesList.filter((item) => item.title !== id);
    setMoviesList(updatedList);
  };

  const addMovie = (movie) => {
    const movieToAdd = {
      title: movie["im:name"].label,
      imageUrl: movie["im:image"][2].label,
      description: movie.summary.label,
      href: movie.link[1].attributes.href,
    };
    addMovies(movieToAdd);
  };

  return (
    <ButtonWithIcon
      icon={isMovieLiked ? faHeart : faHeartBroken}
      className={`AddMeToList ${isMovieLiked ? "liked" : ""}`}
      onClick={handleAddToListClick}
    />
  );
}

AddToListButton.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default AddToListButton;
