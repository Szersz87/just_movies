import React from 'react'; 

import Menu from './menu'
import ImageWithIcons from './image';
import logo from '../assets/images/logo.jpg';
import { faSearch, faUser, faBell, faInfo } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const iconList = [faSearch, faUser, faBell, faInfo];

  return (
    <div className="navBar">
      <div><ImageWithIcons imageSrc={logo} /></div>
      <div>
       <Menu />
      </div>
      <div><ImageWithIcons iconList={iconList} /></div>
    </div>
  );
}

export default NavBar;
