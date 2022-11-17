import React from "react";
import style from "./regNavBar.module.css"
import { Link } from "react-router-dom";

const RegNavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/registration">Student</Link>
        <Link to="/provostReg">Provost</Link>
        <Link to="/administrationReg">Administration</Link>
        <Link to="/dept_headReg">Department Head</Link>
      </nav>
    </div>
  )
}

export default RegNavBar