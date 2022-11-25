import React, { useState } from "react";
import style from "./Application.module.css";
import CustomButton from "../../components/custom_button/CustomButton";
import Division from "../../components/json/divisions.json";
import District from "../../components/json/district.json";
import Upazilla from "../../components/json/upazilla.json";
import Union from "../../components/json/union.json";
import { Link } from "react-router-dom";
const Application = () => {
  const div = Division;
  const dis = District;
  const up = Upazilla;
  const uni = Union;

  let permanent_address = "";

  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazilla, setUpazilla] = useState("");
  const [union, setUnion] = useState("");
  const [division1, setDivision1] = useState("");
  const [district1, setDistrict1] = useState("");
  const [upazilla1, setUpazilla1] = useState("");
  const [union1, setUnion1] = useState("");

  const handleDivision = (e) => {
    setDivision(e.target.value);
  };
  const handleDistrict = (e) => {
    setDistrict(e.target.value);
  };
  const handleUpazilla = (e) => {
    setUpazilla(e.target.value);
  };
  const handleUnion = (e) => {
    setUnion(e.target.value);
  };

  const handleDivision1 = (e) => {
    setDivision1(e.target.value);
  };
  const handleDistrict1 = (e) => {
    setDistrict1(e.target.value);
  };
  const handleUpazilla1 = (e) => {
    setUpazilla1(e.target.value);
  };
  const handleUnion1 = (e) => {
    setUnion1(e.target.value);
  };

  // for (var i = 0; i < uni.length; i++) {
  //   if (i.id === union) {
  //     console.log("hiiiii")
  //     permanent_address = permanent_address + i.name;
  //     break;
  //   }
  // }
  // for (var j = 0; j < up.length; j++) {
  //   if (j.id === upazilla) {
  //     console.log("nishat");
  //     permanent_address = permanent_address + j.name;
  //   }
  // }
  // for (var k = 0; k < dis.length; k++) {
  //   if (k.id === district) {
  //     permanent_address = permanent_address + k.name;
  //   }
  // }
  // for (var l = 0; l < div.length; l++) {
  //   if (l.id === division) {
  //     permanent_address = permanent_address + l.name;
  //   }
  // }

  console.log(union + upazilla + district + division);





  return (
    <div>
      <form className={style.container}>
        <h1 className={style.h1}>Application</h1>
        <div className={style.perm_add}>
          {" "}
          <div>
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" name="Name" placeholder="Name" />
          </div>
          {/* <div>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last name"
            />
          </div> */}
        </div>
        <div className={style.perm_add}>
          <div>
            <label htmlFor="fathers_name">Father's Name</label>
            <input
              type="text"
              id="fathers_name"
              name="Father_name"
              placeholder="Father's Name"
            />
          </div>
          <div>
            <label htmlFor="mothers_name">Mother's Name</label>
            <input
              type="text"
              id="mothers_name"
              name="Mother_name"
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
              name="PhoneNo"
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

        <div>
          <label htmlFor="department">Department</label>
          <select id="department" name="Department">
            <option value="department1">SWE</option>
            <option value="department2">PME</option>
            <option value="department3">GEB</option>
            <option value="department4">CSE</option>
            <option value="department5">EEE</option>
            <option value="department6">CEE</option>
            <option value="department7">MEE</option>
            <option value="department8">IPE</option>
            <option value="department9">CEP</option>
            <option value="department10">BMB</option>
            <option value="department11">PME</option>
            <option value="department12">FET</option>
            <option value="department13">ARC</option>
            <option value="department14">CHE</option>
            <option value="department15">PHY</option>
            <option value="department16">MAT</option>
            <option value="department17">GEB</option>
            <option value="department18">FES</option>
            <option value="department19">OCG</option>
            <option value="department20">ENG</option>
            <option value="department21">BNG</option>
            <option value="department22">ECO</option>
            <option value="department23">BBA</option>
            <option value="department24">STA</option>
            <option value="department25">PAD</option>
            <option value="department26">ANP</option>
            <option value="department27">SSC</option>
            <option value="department28">SCO</option>
          </select>
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <select id="year" name="Session">
            <option value="year1">2012-13</option>
            <option value="year2">2013-14</option>
            <option value="year3">2014-15</option>
            <option value="year4">2015-16</option>
            <option value="year5">2016-17</option>
            <option value="year6">2017-18</option>
            <option value="year7">2018-19</option>
            <option value="year8">2019-20</option>
            <option value="year9">2020-21</option>
            <option value="year10">2021-22</option>
            <option value="year11">2022-23</option>
            <option value="year12">2023-24</option>
            <option value="year13">2024-25</option>
          </select>
        </div>
        <div>
          <label htmlFor="reg">Registration No</label>
          <input type="text" id="reg" name="RegNo" placeholder="Reg.No" />
        </div>
        <div>
          <label htmlFor="merit">Merit Position (Admission Test)</label>
          <input
            type="text"
            id="merit"
            name="Merit_position"
            placeholder="Merit Position"
          />
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
                  return <option value={res.id} >{res.name}</option>;
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
        <h3>Last Result</h3>
        <div className={style.perm_add}>
          <div>
            <label htmlFor="exam">Exam Name</label>
            <select id="exam" name="Last_result">
              <option value="exam1">1-1</option>
              <option value="exam2">1-2</option>
              <option value="exam3">2-1</option>
              <option value="exam4">2-2</option>
              <option value="exam5">3-1</option>
              <option value="exam6">3-2</option>
              <option value="exam7">4-1</option>
              <option value="exam8">4-2</option>
              <option value="exam9">5-1</option>
              <option value="exam10">5-2</option>
              <option value="exam11">M-1</option>
              <option value="exam12">M-2</option>
              <option value="exam13">M-3</option>
              <option value="exam14">M-4</option>
            </select>
          </div>
          {/* <div>
            <label htmlFor="year">Passing Year</label>
            <select id="year" name="year">
              <option value="year1">2014-15</option>
              <option value="year2">2015-16</option>
              <option value="year3">2016-17</option>
              <option value="year4">2017-18</option>
              <option value="year5">2018-19</option>
              <option value="year6">2019-20</option>
              <option value="year7">2020-21</option>
              <option value="year8">2021-22</option>
              <option value="year9">2022-23</option>
              <option value="year10">2023-24</option>
              <option value="year11">2024-25</option>
              <option value="year12">2025-26</option>
              <option value="year13">2026-27</option>
            </select>
          </div>  */}
          <div>
            <label htmlFor="semester">Semester</label>
            <select id="semester" name="Semester">
              <option value="exam1">1-1</option>
              <option value="exam2">1-2</option>
              <option value="exam3">2-1</option>
              <option value="exam4">2-2</option>
              <option value="exam5">3-1</option>
              <option value="exam6">3-2</option>
              <option value="exam7">4-1</option>
              <option value="exam8">4-2</option>
              <option value="exam9">5-1</option>
              <option value="exam10">5-2</option>
              <option value="exam11">M-1</option>
              <option value="exam12">M-2</option>
              <option value="exam13">M-3</option>
              <option value="exam14">M-4</option>
            </select>
          </div>
          <div>
            <label htmlFor="cgpa">CGPA</label>
            <input
              type="text"
              id="cgpa"
              name="Last_result"
              placeholder="CGPA"
            />
          </div>
        </div>

        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <CustomButton color="green" name="Submit"></CustomButton>
        </Link>
      </form>
    </div>
  );
};

export default Application;
