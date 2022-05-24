import React, { useState } from 'react'
export default function  SignUp()  {
const [firstName , setFirstName] = useState(null);
const [lastName , setLastName] = useState(null);
const [email , setEmail] = useState(null);
const [password , setPassword] = useState(null);

const register = () =>{
  console.log("Sending data " , firstName , lastName , email , password);
}

    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e)=>setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input 
          type="text" 
          className="form-control" 
          placeholder="Last name" 
          onChange={(e)=>setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="button" className="btn btn-primary" onClick={()=>register()}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  
}