import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>SATISH V M</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
