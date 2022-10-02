import { useState } from "react";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const MenuBox1 = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
  };

  return (
    <div key={1} className={selected === 1 ? "Menu-box active" : "Menu-box"}>
      <div className="Menu-box-title" onClick={() => toggle(1)}>
        <QueryStatsIcon fontSize="large" />
        <h2>SUMMARY</h2>
      </div>

      <div className="Menu-box-content">
        <ul className="Menu-box-list">
          <li>list item</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBox1;
