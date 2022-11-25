import React, { useState, useEffect } from "react";
import style from "../application_list/appliList.module.css";
import SideMenu from "../../components/sidemenu/SideMenu";
import { FcCancel, FcOk } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { CiCircleMore } from "react-icons/ci";
import Axios from "axios";

const Resident = () => {
  const [users, setUsers] = useState([]);


  const getResidents = async () => {
    try {
      const res = await Axios.post(
        "http://localhost:1111/api/v1/authority/resident/getAllResidentsInfo",

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
    getResidents();
  }, []);


  const DisplayData = users.map((info) => {
    console.log(info);
    return (
      <tr>
        <td>{info.Name}</td>
        <td>{info.RegNo}</td>
        <td>{info.Department}</td>
        <td>{info.RoomNo}</td>
        <td>{info.Admission_date}</td>
        <td>{info.Expire_date}</td>
        <td>
          {info.Studentship_expiration}{" "}
          <Link to="/delete-resident">
            <CiCircleMore></CiCircleMore>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <SideMenu />
      <div style={{boxShadow: "none"}} className={style.table_wrapper}>
        <h2 style={{marginLeft: "400px"}}>Resident List</h2>
        <table className={style.fl_table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>RegNo</th>
              <th>Department</th>
              <th>RoomNo</th>
              <th>Admission</th>
              <th>Expiration</th>
              <th>Studentship Expiration</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Resident;
