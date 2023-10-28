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
            <Link to="/randomMovies">Random Movies</Link>
          </li>
          <li>
            <Link to="/favouriteList">Favourite List</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
