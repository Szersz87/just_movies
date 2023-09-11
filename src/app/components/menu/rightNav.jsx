import React from "react";
import Icon from "../../../shared/icons";
import {
    faSearch,
    faUser,
    faBell,
    faInfo,
  } from "@fortawesome/free-solid-svg-icons";
  
  
  const iconList = [faSearch, faUser, faBell, faInfo];

function RightNav () {
    return (
        <div className="iconsContainer">
        <Icon iconList={iconList} />
        </div>
    )
  };
  
  export default RightNav;