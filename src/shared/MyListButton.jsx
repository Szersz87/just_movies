import React, { useState, useEffect } from "react";
import Button from "../shared/ButtonWithIcon";
import PropTypes from "prop-types";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

function MyListButton({ movie }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    const isMovieInList = myList.some(
      (item) => item.title === movie["im:name"].label
    );
    setIsLiked(isMovieInList);
  }, [movie]);

  const handleAddToListClick = () => {
    if (isLiked) {
      const myList = JSON.parse(localStorage.getItem("myList")) || [];
      const updatedList = myList.filter(
        (item) => item.title !== movie["im:name"].label
      );
      localStorage.setItem("myList", JSON.stringify(updatedList));
    } else {
      const movieToAdd = {
        title: movie["im:name"].label,
        imageUrl: movie["im:image"][2].label,
      };
      const myList = JSON.parse(localStorage.getItem("myList")) || [];
      myList.push(movieToAdd);
      localStorage.setItem("myList", JSON.stringify(myList));
    }

    
    setIsLiked(!isLiked);
  };

  return (
    <Button
      icon={isLiked ? faHeart : faHeartBroken}
      className={`AddMeToList ${isLiked ? "liked" : ""} ${isLiked ? "red-heart-icon" : ""}`}
      onClick={handleAddToListClick}
    />
  );
}

MyListButton.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MyListButton;
