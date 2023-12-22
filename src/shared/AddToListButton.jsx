import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useAddToLocalStorage, toggleMovie } from "../shared/Hooks/UseMoviesLocalStorage";

function AddToListButton({ movie }) {
  const addToLocalStorage = useAddToLocalStorage();

  const handleAddToListClick = () => {
    const updatedMovies = toggleMovie(movie);
    addToLocalStorage(updatedMovies);
  };

  return (
    <ButtonWithIcon
      icon={movie.isLiked ? faHeart : faHeartBroken}
      className={`AddMeToList ${movie.isLiked ? "liked" : ""}`}
      onClick={handleAddToListClick}
    />
  );
}

AddToListButton.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default AddToListButton;







