import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {to: "/", label: "Home"},
  { to: "/movies", label: "Movies" },
  { to: "/directors", label: "Directors" },
  { to: "/actors", label: "Actors" }
]

function NavBar() {
  return (
    <div className="navbar">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          exact
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

export default NavBar;
