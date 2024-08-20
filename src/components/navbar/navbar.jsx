import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/inicio"}>
        <h2>LUCÍ A LA MODA</h2>
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <div className="border">
        <li><Link to={"/inicio"}>Inicio</Link></li>
        <li><Link to={"/inicio/hombre"}>Hombre</Link></li>
        <li><Link to={"/inicio/dama"}>Dama</Link></li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
