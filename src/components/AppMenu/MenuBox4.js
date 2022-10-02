import { useState } from "react";
import EarbudsIcon from "@mui/icons-material/Earbuds";

const MenuBox4 = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
  };

  return (
    <div key={4} className={selected === 4 ? "Menu-box active" : "Menu-box"}>
      <div className="Menu-box-title" onClick={() => toggle(4)}>
        <EarbudsIcon fontSize="large" />
        <h2>LISTEN</h2>
      </div>

      <div className="Menu-box-content">
        <ul className="Menu-box-list">
          <li>list item</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBox4;
