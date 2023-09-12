import React from "react";
import LeftNav from "./LeftNav"
import NavMenu from "../pages/NavigationMenu";
import RightNav from "./RightNavi"



function Header() {
  return (
    <div className="navBar">
      <LeftNav />
      <NavMenu />
      <RightNav />
    </div>
  );
}

export default Header;
