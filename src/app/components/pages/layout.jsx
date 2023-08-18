import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/newAndPopular">New And Popular</Link>
          </li>
          <li>
            <Link to="/myList">My List</Link>
          </li>
        </ul>
      </nav>


      <Outlet />
      
    </>
  );
}
