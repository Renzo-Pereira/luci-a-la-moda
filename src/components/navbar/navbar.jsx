import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h2>LUCÍ A LA MODA</h2>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <div className="border">
        <li>Inicio</li>
        <li>Hombre</li>
        <li>Dama</li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
