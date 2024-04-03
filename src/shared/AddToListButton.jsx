import React, { useContext, useEffect, useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { MoviesContext } from "../context/MoviesContext";
import { useLocalStorage } from "../shared/Hooks/UseLocalStorage";

function AddToListButton({ movie }) {
  const { toggleMovie } = useContext(MoviesContext);
  const [savedMovies] = useLocalStorage("movies", []);

  const [isLiked, setIsLiked] = useState(movie.isLiked);

  useEffect(() => {
    const storedMovie = savedMovies.find(
      (item) => item.title.label === movie.title.label
    );
    setIsLiked(storedMovie ? true : false);
  }, [savedMovies, movie]);

  const handleAddToListClick = () => {
    toggleMovie(movie);
    setIsLiked(!isLiked);
  };

  return (
    <ButtonWithIcon
      icon={isLiked ? faHeart : faHeartBroken}
      className={`AddMeToList ${isLiked ? "liked" : ""}`}
      onClick={handleAddToListClick}
    />
  );
}

AddToListButton.propTypes = {
  movie: PropTypes.object.isRequired,
  movies: PropTypes.object,
};

export default AddToListButton;






