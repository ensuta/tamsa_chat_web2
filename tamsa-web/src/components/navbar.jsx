import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';

function navbar () {
  return (
  <div className="navbar">
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/team">Team</NavLink>
    </li>
    <li>
      <NavLink to="/purchase">Purchase</NavLink>
    </li>
    <li>
      <NavLink to="/contacts">Contact Us</NavLink>
    </li>
  </div>
  );
}
export default navbar;