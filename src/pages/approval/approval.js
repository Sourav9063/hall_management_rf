import React, { useContext, useState } from "react";
import style from "../application_list/appliList.module.css"
import SideMenu from "../../components/sidemenu/SideMenu";
import { CiCircleMore } from "react-icons/ci";
import { FcCancel,FcOk } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
const Approval = () => {
    const applicant = [
        {
          name: "asdfghjk",
          regNo: "2018831029",
          dept: "Swe",
          semester: "5th",
          merit: 10,
          status: "completed",
        },
        {
          name: "asdfghjk",
          regNo: "2018831011",
          dept: "Swe",
          semester: "5th",
          merit: 10,
          status: "completed",
        },
        {
          name: "asdfghjk",
          regNo: "2018831088",
          dept: "Swe",
          semester: "5th",
          merit: 10,
          status: "completed",
        },
        {
          name: "asdfghjk",
          regNo: "2018831111",
          dept: "Swe",
          semester: "5th",
          merit: 10,
          status: "completed",
        },
        {
          name: "asdfghjk",
          regNo: "2016453213",
          dept: "Swe",
          semester: "5th",
          merit: 10,
          status: "completed",
        },
        {
          name: "asdfghjk",
          regNo: "2019837468",
          dept: "Swe",
          semester: "5th",
          merit: 10,
          status: "completed",
        },
        {
          name: "asdfghjk",
          regNo: "20193746381",
          dept: "Swe",
          semester: "5th",
          merit: 10,
          status: "completed",
        },
      ];
      
      const DisplayData = applicant.map((info) => {
        console.log(info)
        return (
          <tr>
            <td>{info.name}</td>
            <td>{info.regNo}</td>
            <td>{info.dept}</td>
            <td>{info.semester}  <Link><CiCircleMore></CiCircleMore></Link></td>
            <td>
            <Link><FcOk size = "2em"></FcOk></Link>
            </td>
            <td><Link><FcCancel size = "2em"></FcCancel></Link></td>
          </tr>
        );
      });
      return (
        <div>
          <SideMenu />
          <div className={style.table_wrapper}>
          <h2>Applicant List</h2>
          <table className={style.fl_table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>RegNo</th>
                <th>Department</th>
                <th>Semester</th>
                <th>Accept</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
        </div>
      );
}

export default Approval