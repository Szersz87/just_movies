import React from "react";
import Icon from "../../../shared/Icon";
import {
  faSearch,
  faUser,
  faBell,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

const iconList = [
  { id: "search", icon: faSearch },
  { id: "user", icon: faUser },
  { id: "bell", icon: faBell },
  { id: "info", icon: faInfo },
];

function RightNav() {
  return (
    <div className="iconsContainer">
      {iconList.map((iconData) => (
        <Icon key={iconData.id} src={iconData.icon} />
      ))}
    </div>
  );
}

export default RightNav;
