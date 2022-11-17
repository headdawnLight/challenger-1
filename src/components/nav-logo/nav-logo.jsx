import "./nav-logo.css";
import logo from "../../images/nav-logo.png";

const NavLogo = () => {
  return (
    <div className="nav-logo">
      <img src={logo} alt="nav_logo" />
    </div>
  );
};

export default NavLogo;
