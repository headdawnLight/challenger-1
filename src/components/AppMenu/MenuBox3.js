import { useState } from "react";
import ForumIcon from "@mui/icons-material/Forum";

const MenuBox3 = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
  };

  return (
    <div key={3} className={selected === 3 ? "Menu-box active" : "Menu-box"}>
      <div className="Menu-box-title" onClick={() => toggle(3)}>
        <ForumIcon fontSize="large" />
        <h2>ENGAGE</h2>
      </div>
      <div className="Menu-box-content">
        <ul className="Menu-box-list">
          <li>list item</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBox3;
