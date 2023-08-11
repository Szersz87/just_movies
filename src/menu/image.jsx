import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Images = ({ imageSrc = null, iconList = [] }) => {
  return (
    <div className="images">
       {imageSrc && <img src={imageSrc} alt="Logo" max-width="6vh" max-height="14vh" />}
      <div className="iconsContainer">
        {iconList.map((icon, index) => (
          <FontAwesomeIcon key={index} icon={icon} />
        ))}
      </div>
     </div>
  );
};

export default Images;
