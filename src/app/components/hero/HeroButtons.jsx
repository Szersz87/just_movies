import React, { useState } from "react";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../shared/ButtonWithIcon";
import PreviewModal from "../../../shared/PreviewModal";

function HeroButtons() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleInfoClick() {
    alert("Clicked");
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
        title="Info"
        className="cardBtnInfo"
        icon={faCircleInfo}
        onClick={handleInfoClick}
      />
      <Button
        title="Play"
        className="cardBtnPlay"
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
