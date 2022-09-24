import React from "react";
import style from "./LogIn.module.css";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };

  return (
    <div>
      <form className={style.container}>
        <h1 className={style.h1}>Log In</h1>
        <div>
          <div>
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="@sust.edu"
            />
          </div>
        </div>
        <div>
          <label for="psw">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div>
        <div>
          <input type="radio" id="age1" name="age" value="30" />
          <label for="age1">Student</label>
          <input type="radio" id="age1" name="age" value="30" />
          <label for="age1">Provost</label>
          <input type="radio" id="age2" name="age" value="60" />
          <label for="age2">Administration</label>
          <input type="radio" id="age3" name="age" value="100" />
          <label for="age3">Department Head</label>
        </div>
        <div className={style.btns}>
          <button onClick={toHome} className={`${style.submit} ${style.cancel} `}>Cancel</button>
          <button className={style.submit}>Log In</button>
        </div>
        <p style={{ fontSize: "20px" }}>Don't have an account?<Link to="/application">Register</Link></p>
      </form>

    </div>
  );
};

export default LogIn;
