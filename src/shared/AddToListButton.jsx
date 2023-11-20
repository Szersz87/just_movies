import React, { useState, useEffect } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import PropTypes from "prop-types";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import useGetMovies from "./Hooks/UseGetMovies";

function AddToListButton({ movie }) {
  const { movies, setMoviesInLocalStorage } = useGetMovies();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const isMovieInList = movies.some(
      (item) => item.title === movie["im:name"].label,
    );
    setIsLiked(isMovieInList);
  }, [movie]);

  const handleAddToListClick = () => {
    if (isLiked) {
      const updatedList = movies.filter(
        (item) => item.title !== movie["im:name"].label,
      );
      setMoviesInLocalStorage(updatedList);
    } else {
      const movieToAdd = {
        title: movie["im:name"].label,
        imageUrl: movie["im:image"][2].label,
        description: movie.summary.label,
        href: movie.link[1].attributes.href,
      };
      setMoviesInLocalStorage([...movies, movieToAdd]);
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

AddToListButton.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default AddToListButton;
