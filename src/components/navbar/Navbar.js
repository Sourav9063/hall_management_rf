import React from "react";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Navbar = () => {
  return (

    <div className={styles.nav_wrap}>
      <nav className={styles.main_nav}>
        <Link to="/">Home</Link>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#facilities">Facilities</AnchorLink>
        <AnchorLink href="#gallery">Gallery</AnchorLink>
        <Link to="/issue" state={{ forWhat: "Issue" }}>Issue</Link>
        <Link to="/issue" state={{ forWhat: "Payment" }}>Payment</Link>
      </nav>
    </div>

  );
};

export default Navbar;
