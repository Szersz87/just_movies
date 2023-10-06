import React from "react";
import Button from "../shared/ButtonWithIcon";
import PropTypes from "prop-types";

function MyListButton({ movie }) {
  const handleAddToListClick = () => {
    const movieToAdd = {
      title: movie["im:name"].label,
      imageUrl: movie["im:image"][2].label,
    };
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    myList.push(movieToAdd);
    localStorage.setItem("myList", JSON.stringify(myList));
  };
  return (
    <Button
      title="Add me to Your List"
      className="AddMeToList"
      onClick={handleAddToListClick}
    />
  );
}

MyListButton.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MyListButton;
