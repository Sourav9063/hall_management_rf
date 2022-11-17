import React from "react";
import style from "./sidemenu.module.css";
import { Link, useNavigate } from "react-router-dom";
const SideMenu = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.sidebar}>
        {/* <div className={style.profile}>
                <img src="https://www.finevector.com/2019/10/shahjalal-university-of-science.html" alt="profile_picture"/>
                <h3>Anamika Roy</h3>
                <p>Designer</p>
            </div> */}
          <ul>
          <li>
              <Link to="/application-list"><span className={style.item}>Applicant</span></Link>
            </li>
            <li>
              <Link to="/resident"><span className={style.item}>Residents</span></Link>
            </li>
            <li>
            <Link to="/room"><span className={style.item}>Room Details</span></Link>
            </li>
            <li>
              <Link to="/payment"><span className={style.item}>Payment Details</span></Link>
            </li>
            <li>
              <Link to="/approved"><span className={style.item}>Approved Student</span></Link>
            </li>
            <li>
              <Link to="/cancelled"><span className={style.item}>Cancelled Student</span></Link>
            </li>
            <li>
            <Link to="/issue_list"><span className={style.item}>Currents Issues</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
