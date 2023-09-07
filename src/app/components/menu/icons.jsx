import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faBell,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";



const iconList = [faSearch, faUser, faBell, faInfo];

const Icon = ({ imageSrc, type }) => {
  if (type === "icon") {
    return (
      <div>
      {iconList.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} />
      ))}
      </div>
)}};

export default Icon;
