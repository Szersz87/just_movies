import React, { useState } from "react";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../shared/ButtonWithIcon";
import PreviewModal from "../../../shared/PreviewModal";
import PropTypes from "prop-types";


function HeroButtons({youtubeTrailerURL}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInfoClick = () => {
    alert(
      "Here should be a description of this movie, but I didn't put it. Sorry ;)",
    );
  };

  const toggleModal = () => {
    setModalIsOpen((prevModalIsOpen) => !prevModalIsOpen);
  };
  
  return (
    <div className="cardBtns">
      <Button
        className="cardBtnInfo"
        title="Info"
        buttonContent="buttonContent"
        icon={faCircleInfo}
        onClick={handleInfoClick}
      />
      <Button
        className="cardBtnPlay"
        buttonContent="buttonContent"
        title="Play"
        icon={faPlay}
        onClick={toggleModal}
      />
      <PreviewModal isOpen={modalIsOpen} onRequestClose={toggleModal} videoUrl={youtubeTrailerURL} />
    </div>
  );
}

HeroButtons.propTypes = {
  youtubeTrailerURL: PropTypes.string.isRequired,
};

export default HeroButtons;

