import React from "react";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../shared/Button";


function HeroButtons() {
  return (
    <div className="cardBtns">
      <Button title="Info" className="cardBtnInfo" icon={faCircleInfo} />
      <Button title="Play" className="cardBtnPlay" icon={faPlay} />
    </div>
  );
}

export default HeroButtons;