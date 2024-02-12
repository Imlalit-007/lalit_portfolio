import "../../styles/Navbar.css";
import { links } from "./links.js";
import { NavLinks } from "./NavLinks";
import ThemeMode from "../ThemeMode/ThemeMode";
import logo from "../../assets/lalit's_portfolio_logo.png";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(false);
  };

  return (
    <div>
      <nav>
        <div className='nav-logo'>
          <img
            src={logo}
            alt={logo}
          />
        </div>
        <ul className={toggleMenu ? "menu-open" : ""}>
          {links.map(link => (
            <NavLinks
              key={link.id}
              link={link}
              click={handleClick}
            />
          ))}
        </ul>
        <ThemeMode />
        <div
          onClick={() => setToggleMenu(!toggleMenu)}
          className='toggle-menu-icon'
        >
          {!toggleMenu ? <HiOutlineMenuAlt4 /> : <CgClose />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
