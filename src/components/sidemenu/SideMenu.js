import React, { useEffect } from "react";
import style from "./sidemenu.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
const SideMenu = () => {

  const [role, setRole] = useState("");


  const getRole = async () => {

    try {
      const res = await Axios.get("http://localhost:1111/api/v1/user/role",

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }


      )


      setRole(res.data.data[0].role)
      console.log(role);




    }
    catch (err) {
      console.log(err);
    }



  }


  useEffect(() => {
    console.log("useEffect");
    getRole();

    return () => {

    }
  }, [])





  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.sidebar}>
          <h2>
            {role}
          </h2>
          <ul>
            {role === "PROVOST" &&
              <>   <li>
                <Link to="/user"><span className={style.item}>User</span></Link>
              </li>
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
                <li>
                  <Link to="/approved-issue"><span className={style.item}>Approved Issue</span></Link>
                </li>
                <li>
                  <Link to="/issue-to-approve"><span className={style.item}>Issue to Approve</span></Link>
                </li>
                <li>
                  <Link to="/for-approval"><span className={style.item}>Student To Approve</span></Link>
                </li>
              </>
            }

            {
              role === "AUTHORITY" &&
              <>   <li>
                <Link to="/user"><span className={style.item}>User</span></Link>
              </li>
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
                <li>
                  <Link to="/approved-issue"><span className={style.item}>Approved Issue</span></Link>
                </li>
              </>
            }

            {role === "DEPT_HEAD" &&
              <li>
                <Link to="/for-approval"><span className={style.item}>Student To Approve</span></Link>
              </li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
