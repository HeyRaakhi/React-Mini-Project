import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Resume Skill Matcher Pro</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/matcher">Matcher</Link>
        <Link to="/career">Career Tips</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;