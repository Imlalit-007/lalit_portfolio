import { NavLink } from "react-router-dom";

export const NavLinks = ({ link, click }) => {
  return (
    <li>
      <NavLink to={link.link} onClick={click}>
        <span>{link.name}</span>
      </NavLink>
    </li>
  );
};
