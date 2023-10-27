import React, { useState, useEffect } from "react";
import ButtonWithIcon from "../shared/ButtonWithIcon";
import PropTypes from "prop-types";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import SetItem from "./SetItem"
import GetItem from "./GetItem"

function MyListButton({ movie }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const myList = GetItem("myList") || [];
    const isMovieInList = myList.some(
      (item) => item.title === movie["im:name"].label
    );
    setIsLiked(isMovieInList);
  }, [movie]);

  const handleAddToListClick = () => {
    if (isLiked) {
      const myList = GetItem("myList") || [];
      const updatedList = myList.filter(
        (item) => item.title !== movie["im:name"].label
      );
      SetItem("myList", updatedList);
    } else {
      const movieToAdd = {
        title: movie["im:name"].label,
        imageUrl: movie["im:image"][2].label,
        description: movie.summary.label,
        href: movie.link[1].attributes.href
      };
      const myList = GetItem("myList") || [];
      myList.push(movieToAdd);
      SetItem("myList", myList);
    }

    
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

MyListButton.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MyListButton;
