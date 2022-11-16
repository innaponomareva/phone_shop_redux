import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="nav-container">
      <div className="nav">
        <ul className="left-side">
          <li className="nav-btn">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-btn">
            <NavLink exact to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-btn">
            <NavLink exact to="/add">
              Add
            </NavLink>
          </li>
        </ul>
        <ul className="right-side">
          <li className="nav-btn">
            <NavLink exact to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
