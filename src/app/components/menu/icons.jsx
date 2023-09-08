import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ iconList }) => {
  return (
    <div>
      {iconList.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} />
      ))}
    </div>
  );
};

export default Icon;

