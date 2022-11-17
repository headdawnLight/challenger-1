import "./nav-box.css";
import NavBar from "../nav-bar/nav-bar";
import NavMenu from "../nav-menu/nav-menu";

const AppNav = () => {
  return (
    <div className="nav-box">
      <NavBar />
      <NavMenu />
    </div>
  );
};

export default AppNav;
