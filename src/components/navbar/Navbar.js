import React, { useContext } from "react";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { UserContext } from "../../utils/userContext";


const Navbar = () => {

  const [user, setUser] = useContext(UserContext)

  return (

    <div className={styles.nav_wrap}>
      <nav className={styles.main_nav}>
        <Link to="/">Home</Link>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#facilities">Facilities</AnchorLink>
        <AnchorLink href="#gallery">Gallery</AnchorLink>
        {user === "Student" && <div>
          <Link to="/issue" state={{ forWhat: "Issue" }}>Issue</Link>
          <Link to="/issue" state={{ forWhat: "Payment" }}>Payment</Link>
        </div>}
        {user !== 'Student' && <Link to="/issue_list">Current Issues</Link>
        }
      </nav>
    </div>

  );
};

export default Navbar;
