import React, { useState } from "react";
import { CiMapPin } from "react-icons/ci";
import { Dropdown } from "react-bootstrap";

interface NavBarProps {
  onClick: () => void;
  items: string[];
  onItemSelected: (item: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onClick, items, onItemSelected }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-brand btn" onClick={onClick}>
          <CiMapPin />
          GeoParkour
        </button>
        <Dropdown>
          <Dropdown.Toggle className="dropdown-btn" id="dropdown-menu">
            Game Modes
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {items.map((item, index) => (
              <>
                {items[index] === "Ranked" && <Dropdown.Divider />}
                <Dropdown.Item
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    onItemSelected(item);
                  }}
                  active={index === activeIndex}
                >
                  {item}
                </Dropdown.Item>
              </>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default NavBar;
