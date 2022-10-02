import { useState } from "react";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

const MenuBox2 = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
  };

  return (
    <div key={2} className={selected === 2 ? "Menu-box active" : "Menu-box"}>
      <div className="Menu-box-title" onClick={() => toggle(2)}>
        <PublishedWithChangesIcon fontSize="large" />
        <h2>PUBLISH</h2>
      </div>

      <div className="Menu-box-content">
        <ul className="Menu-box-list">
          <li>
            <a href="#0">Compose</a>
          </li>
          <li>
            <a href="#1">Feed</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBox2;
