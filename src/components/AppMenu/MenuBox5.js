import { useState } from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";

const MenuBox5 = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
  };

  return (
    <div key={5} className={selected === 5 ? "Menu-box active" : "Menu-box"}>
      <div className="Menu-box-title" onClick={() => toggle(5)}>
        <AssessmentIcon fontSize="large" />
        <h2>REPORT</h2>
      </div>

      <div className="Menu-box-content">
        <ul className="Menu-box-list">
          <li>list item</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBox5;
