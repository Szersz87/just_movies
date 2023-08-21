import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Images = ({ imageSrc = null, iconList = [] }) => {
  return (
    <div className="images">
       {imageSrc && <img src={imageSrc} alt="Logo"/>}
      <div className="iconsContainer">
        {iconList.map((icon, index) => (
          <FontAwesomeIcon key={index} icon={icon} />
        ))}
      </div>
     </div>
  );
};

export default Images;
