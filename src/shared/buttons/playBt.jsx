import React from "react";
import Icon from "../Icon";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const iconList = [faPlay];

function BtnPlay() {
  return (
    <button className="cardBtnPlay">
      <Icon iconList={iconList} />
      <p>Play</p>
    </button>
  );
}

export default BtnPlay;
