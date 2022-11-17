import "./nav-bar.css";
import { NavLink } from "react-router-dom";
import NAV_BAR_DATA from "../../data/nav-bar-data";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      {NAV_BAR_DATA.map((data) => (
        <NavLink
          key={data.id}
          to={data.path}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <img src={data.img} alt="Client_Logo" />
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
