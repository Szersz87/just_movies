import React, { useEffect } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import PropTypes from "prop-types";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import useMoviesLocalStorage from "./Hooks/UseMoviesLocalStorage";

function AddToListButton({ movie }) {
  const [moviesList, toggleMovie] = useMoviesLocalStorage("myList", []);
  const isMovieLiked = moviesList.some((item) => item.title === movie["im:name"].label);

  useEffect(() => {
  }, [moviesList]);

  const handleAddToListClick = () => {
    toggleMovie(movie);
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
