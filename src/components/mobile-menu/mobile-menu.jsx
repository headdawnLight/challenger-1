import "./mobile-menu.css";
import { useState } from "react";
import NavLogo from "../nav-logo/nav-logo";
import NavBar from "../nav-bar/nav-bar";
import NavMenu from "../nav-menu/nav-menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-menu-bar">
      <div className="mobile-menu-box">
        <NavLogo />

        {isMenuOpen ? (
          <button className="mobile-menu-btn" onClick={mobileMenuToggle}>
            <CloseIcon />
          </button>
        ) : (
          <button className="mobile-menu-btn" onClick={mobileMenuToggle}>
            <MenuOpenIcon />
          </button>
        )}
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}>
        <NavBar />
        <NavMenu />
      </div>
    </div>
  );
};

export default MobileMenu;
