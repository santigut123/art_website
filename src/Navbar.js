import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Santi's Art</h1>
      <div className="links">
        <Link to="/Art">Art</Link>
        <Link to="/About">About</Link>
      </div>
    </nav>
  );

}
export default NavBar;
