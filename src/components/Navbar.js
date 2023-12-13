import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { TfiWallet } from "react-icons/tfi";

const Navbar = () => {
  const [click, Setclick] = useState(false);
  const HandleClick = () => {
    Setclick(!click);
  };
  return (
    <div className="header">
      <div className="container">
        <h1>
          Cr<span className="primary">Y</span>pto
          <span className="primary">$</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">
            <TfiWallet />
          </button>
        </div>
        <div className="hamburger" onClick={HandleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
