import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="#">Order Online</Link>
        </li>
        <li>
          <Link to="#">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
