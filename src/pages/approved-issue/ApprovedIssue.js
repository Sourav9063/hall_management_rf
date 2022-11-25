import React from "react";
import SideMenu from "../../components/sidemenu/SideMenu";
import style from "../application_list/appliList.module.css"
import { Link, useNavigate } from "react-router-dom";
import { FcPlus} from "react-icons/fc";

const ApprovedIssue = () => {
    const issues = [
        {
          id: 1,
          roomNo: 101,
          regNo: "18BCE1234",
          issueDate: "2021-01-01",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          status: "pending",
          action:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
          id: 2,
          roomNo: 102,
          regNo: "18BCE1235",
          issueDate: "2021-01-02",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          status: "completed",
          action:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
          id: 3,
          roomNo: 103,
          regNo: "18BCE1236",
          issueDate: "2021-01-03",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          status: "pending",
          action:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
          id: 4,
          roomNo: 104,
          regNo: "18BCE1237",
          issueDate: "2021-01-04",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          status: "pending",
          action:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
          id: 5,
          roomNo: 105,
          regNo: "18BCE1238",
          issueDate: "2021-01-05",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          status: "working",
          action:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
          id: 6,
          roomNo: 106,
          regNo: "18BCE1239",
          issueDate: "2021-01-06",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          status: "completed",
          action:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
          id: 7,
          roomNo: 107,
          regNo: "18BCE1240",
          issueDate: "2021-01-07",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          status: "pending",
          action:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
      ];
    

  const DisplayData = issues.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.regNo}</td>
        <td>{info.dept}</td>
        <td>{info.semester}</td>
        <td>{info.merit}</td>
        <td>
          <Link to="/expense">
           expenses
          </Link>
        </td>
        <td>
          <Link to="/expense">
           reciept
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <SideMenu />
      <div className={style.table_wrapper}>
        <h2>Approved Issue</h2>
        <table className={style.fl_table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>RegNo</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Merit</th>
              <th>Check Payment</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </div>
  );
};
export default ApprovedIssue;
