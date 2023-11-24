import React, { useState, useEffect } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import PropTypes from "prop-types";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import useMoviesLocalStorage from "./Hooks/UseMoviesLocalStorage";

function AddToListButton({ movie }) {
  const [myList, setMyList, addMovie] = useMoviesLocalStorage("myList", []);

  const checkIfMovieInList = (id) => {
    return myList.some((item) => item.title === id);
  };

  const [isLiked, setIsLiked] = useState(() =>
    checkIfMovieInList(movie["im:name"].label),
  );

  useEffect(() => {
    setIsLiked(checkIfMovieInList(movie["im:name"].label));
  }, [movie, myList]);

  const handleAddToListClick = () => {
    isLiked ? removeFromList(movie["im:name"].label) : addToList(movie);
    setIsLiked(!isLiked);
  };

  const removeFromList = (id) => {
    const updatedList = myList.filter((item) => item.title !== id);
    setMyList(updatedList);
  };

  const addToList = (movie) => {
    const movieToAdd = {
      title: movie["im:name"].label,
      imageUrl: movie["im:image"][2].label,
      description: movie.summary.label,
      href: movie.link[1].attributes.href,
    };
    addMovie(movieToAdd);
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
