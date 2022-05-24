import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './auth/login'
import SignUp from './auth/signup'
import LoginMenu from './pages/login.menu'
import Table from './pages/table'

function App() {
  const is_logged = localStorage.getItem("token");
  console.log("Logged :", is_logged);
  var not_loged = true;
  console.log("Not Logged :", not_loged);
  if(is_logged == null){
    not_loged = true
  }
  else
  not_loged = false
  return (
    <Router>
      <div className="App">
     {!is_logged && <LoginMenu /> }
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/table" element={<Table />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App