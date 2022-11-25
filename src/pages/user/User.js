import React, { useState, useEffect } from "react";
import style from "../application_list/appliList.module.css";
import SideMenu from "../../components/sidemenu/SideMenu";
import Axios from "axios";
import CustomButton from "../../components/custom_button/CustomButton";
// import { navigate } from "react-router-dom";
import roles from "../../components/json/roleFromId";

const User = () => {
  const [users, setUsers] = useState([]);

  try {
    const getUsers = async () => {
      const res = await Axios.get(
        "http://localhost:1111/api/v1/authority/user/getAllUsers",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      const data = await res.data;
      setUsers(data.data);
    };
    useEffect(() => {
      getUsers();
    }, []);
  } catch (err) {
    console.log(err);
  }

  const DisplayData = users.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.email}</td>

        <td>
          {/* <select name="role" >
            <option value="student">Student</option>
            <option value="provest">Provost</option>
            <option value="staff">Staff</option>
            <option value="none">None</option>

           
          </select> */}

          <CustomButton name="ASSIGN" color='green' onClick={
            () => {
              // navigate(`/assign`, { state: { id: 7, color: 'green' } })
            }
          } ></CustomButton>
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
              <th>Name</th>
              <th>Email</th>
              <th>Role Assign</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
