import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/grouped" className="nav-link">
              Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
