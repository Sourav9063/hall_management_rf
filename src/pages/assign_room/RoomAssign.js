import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BlueButton from "../../components/custom_button/CustomButton";
import RoomDetails from "../../components/json/room.json";
import style from "./roomassign.module.css";
const RoomAssign = (props) => {
  const roomDetails = RoomDetails;

  const getInitialState = () => {
    const value = 101;
    return value;
  };
  let roomId = null;
  let info = [];
  const [value, setValue] = useState(getInitialState);
  const [block, setBlock] = useState("");
  const [floor, setfloor] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const handleChange = (e) => {
    roomId = e.target.value;
    setValue(roomId);
    info = roomId.split(":");
    setBlock(info[0]);
    setfloor(info[1]);
    setRoomNo(info[2]);
  };

  const { state } = useLocation();
  const { Name, regNo, dept, semester, merit } = state.info;
  return (
    <div>
      {/* <SideMenu /> */}
      <div className={style.header}>
        <h2>Student Information</h2>
      </div>
      <div className={style.info_center}>
        <div className={style.info}>
          <div class={style.container}>
            <div className={style.label}>
              <div>Name</div>
              <div>Reg No</div>
              <div>PhoneNo</div>
              <div>Father's Name</div>
              <div>Mother's Name</div>
              <div>Permanent Address</div>
              <div>Present Address</div>
              <div>Department</div>
              <div>Semester</div>
              <div>Session</div>
              
              <div>Last Result</div>
              <div>Merit_position</div>
            
              <div>Application_date</div>
              <div>Addmission_year</div>
            </div>

            <div className={style.rel_info}>
              <div>Name</div>
              <div>RegNo</div>
              <div>PhoneNo</div>
              <div>Father_name</div>
              <div>Mother_name</div>
              <div>Permanent_address</div>
              <div>Present_address</div>
              <div>Department</div>
              <div>Semester</div>
              <div>Session</div>
              <div>Last_result</div>
              <div>Merit_position</div>
              <div>Application_date</div>
              <div>Addmission_year</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={style.header}>
          <h2>Room Assign</h2>
        </div>
        <div className={style.info_center}>
          <select value={value} onChange={handleChange}>
            <option selected disabled="true">
              ----Assigned Room----
            </option>
            {roomDetails.map((res) => (
              <option value={res.block + ":" + res.floor + ":" + res.roomNo}>
                {res.roomNo}
              </option>
            ))}
          </select>

         <div className={style.rel_info}>
         <p>{`Block :  ${block}`}</p>
          <p>{`Floor : ${floor}`}</p>
         </div>
          <p>
           
              <Link
                to="/for-approval"
                state={{
                  name: Name,
                  regNo: regNo,
                  dept: dept,
                  semester: semester,
                  roomNo: roomNo,
                }}
              >
                 <BlueButton name="Forward"></BlueButton>
              </Link>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomAssign;
