import React from "react";
import { useState } from "react";
import { RiTrainLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu, GiHamburger } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IoArrowBackSharp } from "react-icons/io5";

import "../../styles/navbar.scss";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-tags">
        <a onClick={() => navigate(-1)}>
          <IoArrowBackSharp />
        </a>

        <a onClick={() => navigate("/")}>
          <RiTrainLine />
        </a>
      </div>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/">
          <li>PNR Status</li>
        </Link>
        <Link to="/train-btw-stn">
          <li>Train Between Stations</li>
        </Link>
        <Link to="/train-timetable">
          <li>Train Timetable</li>
        </Link>
      </ul>
      <a className="mobile-menu-icons" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </a>
    </nav>
  );
};

export default Navbar;
