import React from "react";
import style from "../src/css/Application.module.css";

const Application = () => {
  return (
    <div>
      <form className={style.container}>
        <h1>Application</h1>
        <div className={style.perm_add}>
          {" "}
          <div>
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="First Name"
            />
          </div>
          <div>
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className={style.perm_add}>
          <div>
            <label for="fathers_name">Father's Name</label>
            <input
              type="text"
              id="fathers_name"
              name="fathersname"
              placeholder="Father's Name"
            />
          </div>
          <div>
            <label for="mothers_name">Mother's Name</label>
            <input
              type="text"
              id="mothers_name"
              name="mothersname"
              placeholder="Mother's Name"
            />
          </div>
        </div>
        <div className={style.perm_add}>
          {" "}
          <div>
            <label for="phone_no">Phone No</label>
            <input
              type="text"
              id="phone_no"
              name="phone_no"
              placeholder="Phone no"
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="@studet.sust.edu"
            />
          </div>
        </div>
        <h3>Permanent Address</h3>
        <div className={style.perm_add}>
          <div>
            <label for="district">District</label>
            <select id="district" name="district">
              <option value="district1">district1</option>
              <option value="district2">district2</option>
              <option value="district3">district3</option>
            </select>
          </div>
          <div>
            {" "}
            <label for="thana">Thana</label>
            <select id="thana" name="thana">
              <option value="thana1">thana1</option>
              <option value="thana2">thana2</option>
              <option value="thana3">thana3</option>
            </select>
          </div>
          <div>
            {" "}
            <label for="post_office">P.O</label>
            <select id="post_office" name="post_office">
              <option value="post_office1">P.0.1</option>
              <option value="post_office2">P.0.2</option>
              <option value="post_office3">P.0.3</option>
            </select>
          </div>
          <div>
            {" "}
            <label for="vlg">Country</label>
            <select id="vlg" name="vlg">
              <option value="vlg1">Village1</option>
              <option value="vlg2">Village2</option>
              <option value="vlg3">Village3</option>
            </select>
          </div>
        </div>

        <h3>Present Address</h3>
        <div className={style.perm_add}>
          <div>
            <label for="district">District</label>
            <select id="district" name="district">
              <option value="district1">district1</option>
              <option value="district2">district2</option>
              <option value="district3">district3</option>
            </select>
          </div>
          <div>
            {" "}
            <label for="thana">Thana</label>
            <select id="thana" name="thana">
              <option value="thana1">thana1</option>
              <option value="thana2">thana2</option>
              <option value="thana3">thana3</option>
            </select>
          </div>
          <div>
            {" "}
            <label for="post_office">P.O</label>
            <select id="post_office" name="post_office">
              <option value="post_office1">P.0.1</option>
              <option value="post_office2">P.0.2</option>
              <option value="post_office3">P.0.3</option>
            </select>
          </div>
          <div>
            {" "}
            <label for="vlg">Village</label>
            <select id="vlg" name="vlg">
              <option value="vlg1">Village1</option>
              <option value="vlg2">Village2</option>
              <option value="vlg3">Village3</option>
            </select>
          </div>
        </div>

        <div>
          <label for="department">Department</label>
          <select id="department" name="department">
            <option value="department1">SWE</option>
            <option value="department2">PME</option>
            <option value="department3">GEB</option>
          </select>
        </div>
        <div>
          <label for="year">Year</label>
          <select id="year" name="year">
            <option value="year1">2018-19</option>
            <option value="year2">2019-20</option>
            <option value="year3">2020-2021</option>
          </select>
        </div>
        <div>
          <label for="reg">Registration No</label>
          <input type="text" id="reg" name="reg" placeholder="Reg.No" />
        </div>
        <h3>Last Result</h3>
        <div className={style.perm_add}>
          <div>
            <label for="exam">Exam Name</label>
            <select id="exam" name="exam">
              <option value="exam1">exam1</option>
              <option value="exam2">exam2</option>
              <option value="exam3">exam3</option>
            </select>
          </div>
          <div>
            <label for="year">Passing Year</label>
            <select id="year" name="year">
              <option value="year1">2018-19</option>
              <option value="year2">2019-20</option>
              <option value="year3">2020-2021</option>
            </select>
          </div>
          <div>
            <label for="semester">Semester</label>
            <select id="semester" name="semester">
              <option value="semester">1st</option>
              <option value="semester">2nd</option>
              <option value="semester">3rd</option>
            </select>
          </div>
          <div>
            <label for="cgpa">CGPA</label>
            <input type="text" id="cgpa" name="cgpa" placeholder="CGPA" />
          </div>
        </div>
        <div>
          <label for="merit">Merit Position (Admission Test)</label>
          <input type="text" id="merit" name="merit" placeholder="Merit Position" />
        </div>

        <input className={style.submit} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Application;
