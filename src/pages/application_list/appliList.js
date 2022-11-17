import React, {useState} from "react";
import style from "./appliList.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Applicant from "../../components/json/applicant.json"
import SideMenu from "../../components/sidemenu/SideMenu";
import useSortableData from "../../components/sortTable/useSortableData";
const AppliList = () => {
  const applicant = Applicant
  const { items, requestSort } = useSortableData(applicant);

  const DisplayData = items.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.regNo}</td>
        <td>{info.dept}</td>
        <td>{info.semester}</td>
        <td>{info.merit}</td>
        <td>
          <Link
             to="/room-assign" state={{info: info}}
          >
            <FaArrowAltCircleRight></FaArrowAltCircleRight>
          </Link>
        </td>
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
            <th onClick={()=>requestSort("name")}>Name</th>
            <th onClick={()=>requestSort("regNo")}>RegNo</th>
            <th onClick={()=>requestSort("dept")}>Department</th>
            <th onClick={()=>requestSort("semester")}>Semester</th>
            <th onClick={()=>requestSort("merit")}>Merit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
    </div>
  );
};

export default AppliList;
