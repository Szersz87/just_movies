import React, { useState } from "react";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../shared/ButtonWithIcon";
import PreviewModal from "../../../shared/PreviewModal";


const youtubeTrailerURL = "https://www.youtube.com/embed/1bjfXYXHjFo";

function HeroButtons() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInfoClick = () => {
    alert(
      "Here should be description of this movie, but i didn't put it. Sorry ;)",
    );
  };

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <div className="cardBtns">
      <Button
        className="cardBtnInfo"
        title="Info"
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
      <PreviewModal onRequestClose={toggleModal} videoUrl={youtubeTrailerURL} />
    </div>
  );
}

export default HeroButtons;
