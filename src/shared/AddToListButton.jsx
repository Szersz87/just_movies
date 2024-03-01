import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useAddToLocalStorage } from "../shared/Hooks/UseMoviesLocalStorage";

function AddToListButton({ movie }) {
  // console.log(movie)
  // const addToLocalStorage = useAddToLocalStorage(movie);

  const handleAddToListClick = () => {
    console.log(movie)
    useAddToLocalStorage(movie);
    // addToLocalStorage(movie);
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








