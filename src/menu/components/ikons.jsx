import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBell, faInfo } from '@fortawesome/free-solid-svg-icons';

const MyIkons = () => {
    return (
      <div className='icons'>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faInfo} />
      </div>
    );
  };
  
  export default MyIkons;
  