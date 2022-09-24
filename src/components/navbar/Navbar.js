import React from "react";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (

    <div className={styles.nav_wrap}>
      <nav className={styles.main_nav}>
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#facilities">Facilities</a>
        <a href="#gallery">Gallery</a>
        <Link to="/issue" state={{ forWhat: "Issue" }}>Issue</Link>
        <Link to="/issue" state={{ forWhat: "Payment" }}>Payment</Link>
      </nav>
    </div>

  );
};

export default Navbar;
