import { useState } from "react";
import MenuBox1 from "./MenuBox1";
import MenuBox2 from "./MenuBox2";
import MenuBox3 from "./MenuBox3";
import MenuBox4 from "./MenuBox4";
import MenuBox5 from "./MenuBox5";

const AccordionMenu = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
  };

  return (
    <div className="Accordion-menu">
      <MenuBox1 />
      <MenuBox2 />
      <MenuBox3 />
      <MenuBox4 />
      <MenuBox5 />
    </div>
  );
};

export default AccordionMenu;
