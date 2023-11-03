import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AddToListButton from "../../../shared/AddToListButton";
import ButtonWithIcon from "../../../shared/ButtonWithIcon"
import PropTypes from "prop-types";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PreviewModal from "../../../shared/PreviewModal";



function MovieDetails() {
    let { state } = useLocation();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const movieData = state.movieData 

    function handlePlayClick() {
        setModalIsOpen(true);
      }
    
      function closeModal() {
        setModalIsOpen(false);
      }

    return (
        <div className="DetailsContainer">
            <h2>{movieData["im:name"].label}</h2>
            <h3>{movieData.category.attributes.term}</h3>
            <div className="DetailsDescription">
            <img src={movieData["im:image"][2].label}
             alt={movieData["im:name"].label} />
            <p>{movieData.summary.label}</p>
             </div>
             <div className="DetailsButton">
             <AddToListButton movie={movieData} />
             <ButtonWithIcon 
             className="PlayButton"
             icon={faPlay}
             onClick={handlePlayClick}
             />
             </div>
             <PreviewModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        videoUrl={movieData.link[1].attributes.href}
      />

        </div>
    );
}


export default MovieDetails;

MovieDetails.propTypes = {
    movieData: PropTypes.object
}