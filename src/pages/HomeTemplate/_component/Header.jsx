import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function HeaderHomePage() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>          
          <img src={require('./Image/cyber-logo.png')} width="200" alt="Logo" />
        </div>
        <button
          className="navbar-button navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="navbar-menu collapse navbar-collapse"
          id="collapsibleNavId"
        >
          <ul className="navbar-nav nav-menu mx-2 d-flex justify-content-between">
            <li className="nav-item mx-auto">
              <NavLink className={({isActive})=>isActive?"nav-link rounded":"nav-link"} to="#">
              <span className="navbar-toggler-icon" /> Khóa học đào tạo
              </NavLink>
            </li>   
            <li className="nav-item mx-auto my-2">
              <input type={Text} className="search-box" placeholder='Tìm kiếm khoá học'/>
            </li>  
            <li className="nav-item mx-auto my-1">              
                <button className="btn btn-outline-warning mx-1 d-sm-none d-lg-inline-block">
                  Sign up
                </button>
                <button className="btn btn-outline-warning mx-1 d-sm-none d-lg-inline-block">
                  Login
                </button>             
            </li>      
          </ul>          
        </div>        
      </nav>     
    </div>
  );
}
