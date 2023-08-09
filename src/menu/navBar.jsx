import React from 'react'; 
// import '../css/navBar.css'
import Images from './image';
import logo from '../assets/images/logo.jpg';
import { faSearch, faUser, faBell, faInfo } from '@fortawesome/free-solid-svg-icons';
import Menu from './menu';

function NavBar() {
  const iconList = [faSearch, faUser, faBell, faInfo];

  return (
    <div className="navBar">
      <div><Images imageSrc={logo} /></div>
      <div>
       <Menu />
      </div>
      <div><Images iconList={iconList} /></div>
    </div>
  );
}

export default NavBar;
