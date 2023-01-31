import React from "react";
import { useState } from "react";
import { RiTrainLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiHamburger } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import "../../styles/navbar.scss";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h1 id="logo">
        <RiTrainLine />
      </h1>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/pnr-status">
          <li>PNR Status</li>
        </Link>
        <Link to="/train-btw-stn">
          <li>Train Between Stations</li>
        </Link>
        <Link to="/train-timetable">
          <li>Train Timetable</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icons"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
