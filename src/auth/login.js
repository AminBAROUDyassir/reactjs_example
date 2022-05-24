import axios from 'axios';
import React, {useState  } from 'react'

export default function Login(){

const [email, setEmail]  = useState(null);
const [password, setPassword]  = useState(null);
const [rememberMe, setRememberMe]  = useState(false);



const login =() =>{
console.log("pressing login :" ,email , password , rememberMe );
let data = {
  "email":email,
  "password":password
}
axios.post("http://localhost:20034/api/token",data).then(response=>{
  console.log("Getting data from Server :" , response.data);
  localStorage.setItem("token" , response.data );
  window.location.reload(false);
})
}


    return (
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              onChange={(e)=> setRememberMe(e.target.checked)}
            />
            <label className="custom-control-label" htmlFor="customCheck1"  >
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="button" onClick={()=>login()} className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  
}
