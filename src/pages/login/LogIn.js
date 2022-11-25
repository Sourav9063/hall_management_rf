import React, { useContext, useState } from "react";
import style from "./LogIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/userContext";
import useUser from "../../utils/hooks/useUser";
import Axios from "axios";

const LogIn = () => {

  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };

  const [platformValue, platformInputProps] = useState("Student");
  const [user, setUser] = useUser();
  let data = {};

  const signIn = async (email, password) => {

    data.email = email;
    data.password = password


    try {
      const res = await Axios.post(
        "http://localhost:1111/api/v1/public/signIn",

        data
      )
      console.log(res);
      localStorage.setItem("access_token", res.data.access_token);


      if (res.data.success) {
        navigate("/")
      }
      else {
        alert("Invalid Credentials")
      }
      // event.preventDefault();


    }
    catch (err) {
      console.log(err);
    }




  }



  return (
    <div>
      <form className={style.container} onSubmit={async (event) => {
        const email = event.target.email.value;
        const pass = event.target.psw.value

        event.preventDefault();

        await signIn(email, pass);





      }} >
        <h1 className={style.h1}>Log In</h1>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
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
        <div>
          <input type="radio" id="age1" name="age" value="Student" defaultChecked onChange={(e) => {
            platformInputProps(e.target.value);
            console.log(platformValue);
          }} />
          <label htmlFor="age1">Student</label>
          <input type="radio" id="age1" name="age" value="Provost" onChange={(e) => {
            platformInputProps(e.target.value);
            console.log(platformValue);
          }} />
          <label htmlFor="age1" > Provost</label >
          <input type="radio" id="age2" name="age" value="Administration" onChange={(e) => {
            platformInputProps(e.target.value);
            console.log(platformValue);
          }} />
          <label htmlFor="age2" > Administration</label >
          <input type="radio" id="age3" name="age" value="Department" onChange={(e) => {
            platformInputProps(e.target.value);
            console.log(platformValue);
          }} />
          <label htmlFor="age3" > Department Head</label >
        </div >
        <div className={style.btns}>
          <button onClick={toHome} className={`${style.submit} ${style.cancel} `}>Cancel</button>
          <input type="submit" className={style.submit} />
        </div>
        <p style={{ fontSize: "20px" }}>Don't have an account?<Link to="/registration">Register</Link></p>
      </form >

    </div >
  );
};

export default LogIn;


// onClick={(e) => {
//   e.preventDefault();

//   console.dir(e.target);
//   console.log(platformValue);
//   localStorage.setItem("user", platformValue);

//   setUser(platformValue);

//   toHome();

// }} 
