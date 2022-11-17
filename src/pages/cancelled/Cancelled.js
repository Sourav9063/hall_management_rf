import React, { useState } from 'react'
import style from '../application_list/appliList.module.css'
import SideMenu from '../../components/sidemenu/SideMenu';
import {FcRight} from 'react-icons/fc'
import { Link, useNavigate } from "react-router-dom";
import Applicant from "../../components/json/applicant.json"
import useSortableData from "../../components/sortTable/useSortableData"
const Cancelled = () => {
  const applicant = Applicant
  const { items, requestSort } = useSortableData(applicant);
 
  const DisplayData = items.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.regNo}</td>
        <td>{info.dept}</td>
        <td>{info.semester}</td>
        <td>
          <Link to = "/for-approval">
            <FcRight size="2em"></FcRight>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <SideMenu />
      <div className={style.table_wrapper}>
      <h2>Cancelled Student</h2>
      <table className={style.fl_table}>
        <thead>
          <tr>
            <th onClick={()=>requestSort("name")}> 
              Name
            </th>
            <th onClick={()=>requestSort("regNo")}>RegNo</th>
            <th onClick={()=>requestSort("dept")}>Department</th>
            <th onClick={()=>requestSort("semester")}>Semester</th>
            <th onClick={()=>requestSort("merit")}>Resend</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
    </div>
  );
}

export default Cancelled