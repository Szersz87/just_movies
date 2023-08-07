// import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faUser, faBell, faInfo } from '@fortawesome/free-solid-svg-icons';
// import logo from '../assets/images/logo.jpg';

// const Images = () => {
//   return (
//     <div>
//       <img src={logo} alt="Logo" width="400" height="100" />
//       <div className='icons'>
//         <FontAwesomeIcon icon={faSearch} />
//         <FontAwesomeIcon icon={faUser} />
//         <FontAwesomeIcon icon={faBell} />
//         <FontAwesomeIcon icon={faInfo} />
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImageWithIcons.css';



const ImageWithIcons = ({ imageSrc, iconList }) => {
    return (
      <div className="image-with-icons">
        <img src={imageSrc} alt="Logo" width="400" height="100" />
        <div className="icons-container">
          {iconList.map((icon, index) => (
            <FontAwesomeIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    );
  }
  

export default ImageWithIcons;
