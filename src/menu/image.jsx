
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/navBar.css';



  const ImageWithIcons = ({ imageSrc, iconList = [] }) => {
    return (
      <div className="imageWithIcons">
        <img src={imageSrc} alt="Logo" width="400" height="100" />
        <div className="iconsContainer">
          {iconList.map((icon, index) => (
            <FontAwesomeIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    );
}

export default ImageWithIcons;
