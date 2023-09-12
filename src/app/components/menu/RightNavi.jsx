import React from "react";
import Icon from "../../../shared/Icon";
import {
  faSearch,
  faUser,
  faBell,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

const iconList = [faSearch, faUser, faBell, faInfo];

function RightNav() {
  return (
    <div className="iconsContainer">
      {iconList.map(ikona => <Icon src={ikona} /> )}
    </div>
  );
}

export default RightNav;
