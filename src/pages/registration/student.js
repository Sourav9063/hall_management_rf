import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import RegNavBar from "../registration//reg_navbar/RegNavBar";
import style from "../login/LogIn.module.css";
import Axios from "axios";
// import bcrypt from "bcrypt";

const StudentReg = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };



  let data;

  const registration = async (name, email, password, reg) => {
    // const hashPass = await bcrypt.hash(password, 10)

    data = {
      name: name,
      email: email,
      password: password,
      reg: reg,
    };
    console.log(data);

    try {
      const res = await Axios.post(
        "http://localhost:1111/api/v1/public/registration",

        data
      )

      localStorage.setItem("access_token", res.data.access_token);

      if (res.data.success) {
        navigate("/")
      }

      console.log(res);
    }
    catch (err) {
      console.log(err);
    }




  }



  return (
    <div>
      <RegNavBar />
      <form className={style.container} onSubmit={async (event) => {
        // console.log(event);
        console.log(event.target.name.value)
        event.preventDefault();

        await registration(event.target.name.value, event.target.email.value, event.target.psw.value, event.target.RegNo.value)


      }}>
        <h1 className={style.h1}>As Student</h1>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="regno">RegNo</label>
            <input
              type="text"
              id="regno"
              name="RegNo"
              placeholder="RegNo"
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="dept">Department</label>
            <input
              type="text"
              id="dept"
              name="dept"
              placeholder="Department"
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="@sust.edu"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="psw">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div >
        <div className={style.btns}>
          <button onClick={toHome} className={`${style.submit} ${style.cancel} `}>Cancel</button>
          <input type="submit" className={style.submit} />
        </div>
        <p style={{ fontSize: "20px" }}>Don't have an account?<Link to="/login">Sign In</Link></p>
      </form >

    </div >
  )
}

export default StudentReg