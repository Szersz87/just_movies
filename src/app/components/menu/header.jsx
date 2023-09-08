import React from "react";
import Icon from "./icons";
import NavMenu from "../pages/navigationMenu";
import Logo from "./logo"
import logoImg from "../../../assets/images/logo.jpg";
import {
  faSearch,
  faUser,
  faBell,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

const iconList = [faSearch, faUser, faBell, faInfo];

function Header() {
  return (
    <div className="navBar">
      <div className="images">
        <Logo imageSrc={logoImg}/>
      </div>
      <NavMenu />
      <div className="iconsContainer">
      <Icon iconList={iconList} />
      </div>
    </div>
  );
}

export default Header;
