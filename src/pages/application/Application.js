import React, { useState } from "react";
import style from "./Application.module.css";

import Division from "../../components/json/divisions.json";
import District from "../../components/json/district.json"
import Upazilla from "../../components/json/upazilla.json"
import Union from "../../components/json/union.json"
const Application = () => {
  const div = Division;
  const dis = District;
  const up = Upazilla;
  const uni= Union;
  let id = null;
  let disId = null;
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazilla, setUpazilla] = useState("");
  const [union, setUnion] = useState("");
  const [division1, setDivision1] = useState("");
  const [district1, setDistrict1] = useState("");
  const [upazilla1, setUpazilla1] = useState("");
  const [union1, setUnion1] = useState("");
  const handleDivision = (e) => {
    setDivision( e.target.value)
  };
  const handleDistrict = (e) => {
    setDistrict(e.target.value);
  };
  const handleUpazilla = (e) => {
    setUpazilla(e.target.value);
  };
  const handleUnion= (e) => {
    setUnion(e.target.value);
  };

  const handleDivision1 = (e) => {
    setDivision1( e.target.value)
  };
  const handleDistrict1 = (e) => {
    setDistrict1(e.target.value);
  };
  const handleUpazilla1 = (e) => {
    setUpazilla1(e.target.value);
  };
  const handleUnion1= (e) => {
    setUnion1(e.target.value);
  };
  

  return (
    <div>
      <form className={style.container}>
        <h1 className={style.h1}>Application</h1>
        <div className={style.perm_add}>
          {" "}
          <div>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
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
            <label htmlFor="fathers_name">Father's Name</label>
            <input
              type="text"
              id="fathers_name"
              name="fathersname"
              placeholder="Father's Name"
            />
          </div>
          <div>
            <label htmlFor="mothers_name">Mother's Name</label>
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
            <label htmlFor="phone_no">Phone No</label>
            <input
              type="text"
              id="phone_no"
              name="phone_no"
              placeholder="Phone no"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
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
          <label htmlFor="division">Division</label>
            <select value={division} onChange={handleDivision}>
              <option selected disabled="true">
                ----Division----
              </option>
              {div.map((res) => (
                <option value={res.id}>{res.name}</option>
              ))}
            </select>
          </div>

          <div>
          <label htmlFor="district">District</label>
            <select value={district} onChange={handleDistrict}>
              <option selected disabled="true">
                ----District----
              </option>
              {dis.map((res) => {
                if (division === res.division_id) {
                  return <option value={res.id}>{res.name}</option>;
                }
              })}
            </select>
          </div>
          <div>
          <label htmlFor="upazilla">Upazilla</label>
          <select value={upazilla} onChange={handleUpazilla}>
              <option selected disabled="true">
                ----Upazilla----
              </option>
              {up.map((res) => {
                if (district === res.district_id) {
                  return <option value={res.id}>{res.name}</option>;
                }
              })}
            </select>
          </div>
          <div>
          <label htmlFor="union">Union</label>
          <select value={union} onChange={handleUnion}>
              <option selected disabled="true">
                ----Union----
              </option>
              {uni.map((res) => {
                if (upazilla === res.upazilla_id) {
                  return <option value={res.id}>{res.name}</option>;
                }
              })}
            </select>
          </div>
        </div>

        <h3>Present Address</h3>
        <div className={style.perm_add}>
          <div>
          <label htmlFor="division">Division</label>
            <select value={division1} onChange={handleDivision1}>
              <option selected disabled="true">
                ----Division----
              </option>
              {div.map((res) => (
                <option value={res.id}>{res.name}</option>
              ))}
            </select>
          </div>

          <div>
          <label htmlFor="district">District</label>
            <select value={district1} onChange={handleDistrict1}>
              <option selected disabled="true">
                ----District----
              </option>
              {dis.map((res) => {
                if (division1 === res.division_id) {
                  return <option value={res.id}>{res.name}</option>;
                }
              })}
            </select>
          </div>
          <div>
          <label htmlFor="upazilla">Upazilla</label>
          <select value={upazilla1} onChange={handleUpazilla1}>
              <option selected disabled="true">
                ----Upazilla----
              </option>
              {up.map((res) => {
                if (district1 === res.district_id) {
                  return <option value={res.id}>{res.name}</option>;
                }
              })}
            </select>
          </div>
          <div>
          <label htmlFor="union">Union</label>
          <select value={union1} onChange={handleUnion1}>
              <option selected disabled="true">
                ----Union----
              </option>
              {uni.map((res) => {
                if (upazilla1 === res.upazilla_id) {
                  return <option value={res.id}>{res.name}</option>;
                }
              })}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="department">Department</label>
          <select id="department" name="department">
            <option value="department1">SWE</option>
            <option value="department2">PME</option>
            <option value="department3">GEB</option>
          </select>
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <select id="year" name="year">
            <option value="year1">2018-19</option>
            <option value="year2">2019-20</option>
            <option value="year3">2020-2021</option>
          </select>
        </div>
        <div>
          <label htmlFor="reg">Registration No</label>
          <input type="text" id="reg" name="reg" placeholder="Reg.No" />
        </div>
        <h3>Last Result</h3>
        <div className={style.perm_add}>
          <div>
            <label htmlFor="exam">Exam Name</label>
            <select id="exam" name="exam">
              <option value="exam1">exam1</option>
              <option value="exam2">exam2</option>
              <option value="exam3">exam3</option>
            </select>
          </div>
          <div>
            <label htmlFor="year">Passing Year</label>
            <select id="year" name="year">
              <option value="year1">2018-19</option>
              <option value="year2">2019-20</option>
              <option value="year3">2020-2021</option>
            </select>
          </div>
          <div>
            <label htmlFor="semester">Semester</label>
            <select id="semester" name="semester">
              <option value="semester">1st</option>
              <option value="semester">2nd</option>
              <option value="semester">3rd</option>
            </select>
          </div>
          <div>
            <label htmlFor="cgpa">CGPA</label>
            <input type="text" id="cgpa" name="cgpa" placeholder="CGPA" />
          </div>
        </div>
        <div>
          <label htmlFor="merit">Merit Position (Admission Test)</label>
          <input
            type="text"
            id="merit"
            name="merit"
            placeholder="Merit Position"
          />
        </div>

        <input className={style.submit} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Application;
