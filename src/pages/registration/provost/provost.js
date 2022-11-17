import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import RegNavBar from '../reg_navbar/RegNavBar'
import style from "../../login//LogIn.module.css"

const ProvostReg = () => {
    const navigate = useNavigate();
    const toHome = () => {
        navigate("/");
      }
  return (
    <div>
    <RegNavBar/>
    <form className={style.container}>
      <h1 className={style.h1}>As Provost</h1>
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
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="id"
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="@sust.edu"
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
        <input type="submit" className={style.submit}/>
      </div>
      <p style={{ fontSize: "20px" }}>Don't have an account?<Link to="/login">Sign In</Link></p>
    </form >

  </div >
  )
}

export default ProvostReg