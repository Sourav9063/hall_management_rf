import React from "react";
import style from "../assign_room/roomassign.module.css"
import style2 from "./delete.module.css"

const DeleteResident = () => {
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
              <div>Department</div>
              <div>Semester</div>
              <div>Merrit Position</div>
              <div>Amount Reciept No.</div>
              <div>Payment Date</div>
              <div>Expiration Date</div>
            </div>

            <div className={style.rel_info}>
              <div>name</div>
              <div>regNo</div>
              <div>dept</div>
              <div>semester</div>
              <div>merit</div>
              <div>567fghjk</div>
              <div>12/12/21</div>
              <div>12/12/22</div>
            </div>
          </div>
        </div>
        <button className={`${style2.submit} ${style2.cancel}`}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteResident;
