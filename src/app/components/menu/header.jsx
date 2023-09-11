import React from "react";
import LeftNav from "./leftNav"
import NavMenu from "../pages/navigationMenu";
import RightNav from "./rightNav"



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
