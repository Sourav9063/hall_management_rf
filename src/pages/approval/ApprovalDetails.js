import React from 'react'
import style from "../assign_room/roomassign.module.css"
const ApprovalDetails = () => {
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
</div>
  )
}

export default ApprovalDetails