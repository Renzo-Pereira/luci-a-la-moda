import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav role="navigation">
      <Link to={"/"}>
        <div className="logo">
          <h2>LUCÍ A LA MODA</h2>
          <img src={logo} alt="Lucí a la moda logo" />
        </div>
      </Link>
      <ul role="menu">
        <div className="border">
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/hombre"}>Hombre</Link>
          </li>
          <li>
            <Link to={"/dama"}>Dama</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
