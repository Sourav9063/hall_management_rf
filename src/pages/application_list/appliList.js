import React, { useState, useEffect } from "react";
import style from "./appliList.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Applicant from "../../components/json/applicant.json"
import SideMenu from "../../components/sidemenu/SideMenu";
import useSortableData from "../../components/sortTable/useSortableData";
import Axios from "axios";
const AppliList = () => {
  const [users, setUsers] = useState([]);
  const applicant = users
  const { items, requestSort } = useSortableData(applicant);

 


  const getApplicant = async () => {
    try {
      const res = await Axios.post(
        "http://localhost:1111/api/v1/application/get",

        {

          start: 1,
          offset: 10,
          sort_by: "Merit_position",

        }, {
        headers: {

          'Authorization': `Bearer ${localStorage.getItem("access_token")}`,
        },

      }
      );
      const data = await res.data;
      console.log(data.data);
      setUsers(data.data);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    getApplicant();
  }, []);

  const DisplayData = items.map((info) => {
    return (
      <tr>
        <td>{info.Name}</td>
        <td>{info.RegNo}</td>
        <td>{info.Department}</td>
        <td>{info.Semester}</td>
        <td>{info.Merit_position}</td>
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
            <th onClick={()=>requestSort("Name")}>Name
            <img src="src\assets\images\default.png" alt="" srcset="" />
            </th>
            <th onClick={()=>requestSort("RegNo")}>RegNo</th>
            <th onClick={()=>requestSort("Department")}>Department</th>
            <th onClick={()=>requestSort("Semester")}>Semester</th>
            <th onClick={()=>requestSort("Merit_position")}>Merit</th>
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
