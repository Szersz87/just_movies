import React from "react";
import { useLocation } from "react-router-dom";
import AddToListButton from "../../../shared/AddToListButton";
import PropTypes from "prop-types";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ButtonWithIcon from "../../../shared/ButtonWithIcon";

function MovieDetails() {
  let { state } = useLocation();

  const movieData = state.movieData;

  return (
    <div className="DetailsContainer">
      <h2>{movieData["im:name"].label}</h2>
      <h3>{movieData.category.attributes.term}</h3>
      <div className="DetailsDescription">
        <div className="DetailsImg">
          <AddToListButton movie={movieData} />
          <img
            src={movieData["im:image"][2].label}
            alt={movieData["im:name"].label}
          />
        </div>
        <p className="description">{movieData.summary.label}</p>
      </div>
      <div className="iframeContainer">
        <ButtonWithIcon icon={faPlay} className="iconIframe" buttonContent="icon"/>
        <div className="overlayIframe"></div>
        <iframe
          src={movieData.link[1].attributes.href}
          className="iframe"
        >
          
        </iframe>
      </div>
    </div>
  );
}

export default MovieDetails;

MovieDetails.propTypes = {
  movieData: PropTypes.object,
};
