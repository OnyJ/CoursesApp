import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Logout">Logout</Link>
        </li>
        <li>
          <Link to="/AdminDashboard">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
