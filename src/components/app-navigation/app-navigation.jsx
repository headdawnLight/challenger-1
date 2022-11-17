import "./app-navigation.css";
import NavLogo from "../nav-logo/nav-logo";
import NavBox from "../nav-box/nav-box";

const AppNavigation = () => {
  return (
    <div className="app-navigation">
      <NavLogo />
      <NavBox />
    </div>
  );
};

export default AppNavigation;
