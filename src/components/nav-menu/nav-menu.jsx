import "./nav-menu.css";
import NotificationsBox from "../notification-box/notification-box";
import AccordionMenu from "../accordion-menu/accordion-menu.component";

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <NotificationsBox />
      <AccordionMenu />
    </nav>
  );
};

export default NavMenu;
