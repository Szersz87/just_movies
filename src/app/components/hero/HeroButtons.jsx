import React from "react";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../shared/ButtonWithIcon";

function HeroButtons() {
  function handleInfoClick() {
    console.log('Info button clicked');
    alert('Clicked')
  };

  const handlePlayClick = () => {
    console.log('Play button clicked');
    const youtubeTrailerURL = "https://www.youtube.com/watch?v=1bjfXYXHjFo"
    
    window.open(youtubeTrailerURL, "_blank")
  };

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
    </div>
  );
}

export default HeroButtons;