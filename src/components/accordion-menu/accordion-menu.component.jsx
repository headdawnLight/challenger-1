import "./accordion-menu.styles.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MENU_BOX_DATA from "../../data/menu-box-data";

const AccordionMenu = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
  };

  return (
    <div className="accordion-menu">
      {MENU_BOX_DATA.map((box) => (
        <div
          key={box.id}
          className={selected === box.id ? "menu-box active" : "menu-box"}
        >
          <div
            className="menu-box-title"
            onClick={() => toggle(box.id)}
            data-testid={box.id}
          >
            {box.icon}
            <h2>{box.title}</h2>
          </div>

          <div className="menu-box-content">
            {box.links.map((link) => (
              <NavLink key={link.id} to={link.url} className="menu-box-link">
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;
