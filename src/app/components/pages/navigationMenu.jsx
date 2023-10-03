import { Outlet, Link } from "react-router-dom";
import React from 'react';

export default function NavigationMenu() {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newAndPopular">New&Popular</Link>
          </li>
          <li>
            <Link to="/myList">MyList</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
