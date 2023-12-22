import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useAddToLocalStorage } from "../shared/Hooks/UseMoviesLocalStorage";

function AddToListButton({ movie }) {
  const addToLocalStorage = useAddToLocalStorage();
  

  const handleAddToListClick = () => {
    addToLocalStorage(movie);
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
};

export default AddToListButton;






