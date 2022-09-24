import React from "react";
import styles from "../css/Navbar.module.css"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (

    <div className={styles.nav_wrap}>
      <nav className={styles.main_nav}>
        <Link to="/">Home</Link>
        <Link to="#About">About</Link>
        <Link to="#Facilities">Facilities</Link>
        <Link to="#Gallery">Gallery</Link>
        <Link to="/issue">Issue</Link>
      </nav>
    </div>

  );
};

export default Navbar;
