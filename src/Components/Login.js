
import React from "react"
import "./Login.css"
import { useState } from 'react'
import Dashboard from "./Dashboard";
import { Button } from "antd";
import Appheader from "./Appheader";

export default function Login() {
  const [showB, setShowB] = useState(0);
  const toggleButton = () =>{
    setShowB(!showB)
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Welcome to Figma...</h3>
          <h5 className="Auth-form-title"> Signin</h5>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            {/* <button type="submit" className="btn btn-primary">
              Submit
            </button> */}
            <button  onClick={toggleButton}>Signup</button>
         {showB == 1 && <Dashboard/>}
         {/* {showB==0 <Appheader/>} */}
          {showB ==0 && <Login/>} 
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}