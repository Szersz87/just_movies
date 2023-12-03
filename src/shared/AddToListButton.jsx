import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import useMoviesLocalStorage from "./Hooks/UseMoviesLocalStorage";

function AddToListButton({ movie }) {
  const [movies, toggleMovie, setMovies] = useMoviesLocalStorage("myList", []);

  const handleAddToListClick = () => {
    toggleMovie(movies, setMovies, movie);
  };
  

  const isLiked = movie.isLiked || movies.some((item) => item.title === movie["im:name"].label);

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
};

export default AddToListButton;


