import React, { useState } from "react";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../shared/ButtonWithIcon";
import PreviewModal from "../../../shared/PreviewModal";

const youtubeTrailerURL = "https://www.youtube.com/embed/1bjfXYXHjFo";

function HeroButtons() {
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

export default HeroButtons;

