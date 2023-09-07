import React from "react";
import Image from "./icons";
import NavMenu from "../pages/navigationMenu";
import Logo from "./logo"
import logoImg from "../../../assets/images/logo.jpg";
import {
  faSearch,
  faUser,
  faBell,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const iconList = [faSearch, faUser, faBell, faInfo];

  return (
    <div className="navBar">
      <div className="images">
        <Logo imageSrc={logoImg}/>
      </div>
      <NavMenu />
      <div className="iconsContainer">
        <Image type={'icon'} />
      </div>
    </div>
  );
}

export default Header;
