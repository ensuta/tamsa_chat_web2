import React from 'react';
import { Link } from "react-router-dom";

function navbar () {
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/team">Team</Link>
    </li>
    <li>
      <Link to="/purchase">Purchase</Link>
    </li>
    <li>
      <Link to="/contacts">Contact Us</Link>
    </li>
  </div>
  );
}
export default navbar;