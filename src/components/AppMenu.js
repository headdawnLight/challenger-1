import { useState } from "react";

const AppMenu = () => {
  const [selected, setSelected] = useState(null);

  const menuList = [
    {
      title: "Menu Zero",
      text: "Lorem ipsum",
    },
    {
      title: "Menu One",
      text: "Lorem ipsum",
    },
    {
      title: "Menu Two",
      text: "Lorem ipsum",
    },
    {
      title: "Menu Three",
      text: "Lorem ipsum",
    },
    {
      title: "Menu Four",
      text: "Lorem ipsum",
    },
    {
      title: "Menu Five",
      text: "Lorem ipsum",
    },
  ];

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <section className="App-menu">
      <div className="Accordion-menu">
        {menuList.map((item, i) => (
          <div
            className={selected === i ? "Content-box active" : "Content-box"}
          >
            <div className="Content-title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
            </div>
            <div className="Content-text">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppMenu;
