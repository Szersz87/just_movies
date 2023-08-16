import React from 'react'; 
import Images from './image';
import NavBarRight from './image';
import logo from '../../../assets/images/logo.jpg';
import { faSearch, faUser, faBell, faInfo } from '@fortawesome/free-solid-svg-icons';
import NavBar from './navBar';



function Header() {
  const iconList = [faSearch, faUser, faBell, faInfo];

  return (
    <div className="navBar">
      <div><Images imageSrc={logo} /></div>
      <div>
       <NavBar />
      </div>
      <div><NavBarRight iconList={iconList} /></div>
    </div>
  );
}

export default Header;
