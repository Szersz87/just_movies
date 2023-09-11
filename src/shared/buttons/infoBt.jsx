import React from "react";
import Icon from "../../shared/icons";
import {
    faCircleInfo,
  } from "@fortawesome/free-solid-svg-icons";

  const iconList = [faCircleInfo]

  function BtnInfo () {
    return (
        <button className="cardBtnInfo">
            <Icon iconList={iconList} />
            <p>Info</p>
        </button>
    )
  }

  export default BtnInfo;