import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Santi's Website</h1>
      <div className="links">
        <Link to="/">Art</Link>
        <Link to="/Aboutme">About Me</Link>
      </div>
    </nav>
  );

}
  export default Navbar;
