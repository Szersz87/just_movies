import React, { useState } from "react";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../shared/ButtonWithIcon";
import PreviewModal from "../../../shared/PreviewModal";

function HeroButtons() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleInfoClick() {
    alert("Here should be description of this movie, but i didn't put it. Sorry ;)");
  }

  function handlePlayClick() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  const youtubeTrailerURL = "https://www.youtube.com/embed/1bjfXYXHjFo";

  return (
    <div className="cardBtns">
      <Button
        className="cardBtnInfo"
        buttonContent="buttonContent"
        title="Info"
        icon={faCircleInfo}
        onClick={handleInfoClick}
        />
      <Button
        className="cardBtnPlay"
        buttonContent="buttonContent"
        title="Play"
        icon={faPlay}
        onClick={handlePlayClick}
      />
      <PreviewModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        videoUrl={youtubeTrailerURL}
      />
    </div>
  );
}

export default HeroButtons;
