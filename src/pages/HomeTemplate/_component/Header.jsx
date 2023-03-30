import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCourseMenu } from "./duck/action";
import Loader from "./Loader";
import { actKeyword } from "../FindCoursePage/duck/action";
import { useNavigate } from "react-router-dom";
export default function HeaderHomePage() {
  const loading=useSelector((state)=>state.courseMenuReducer.loading);
  const data=useSelector((state)=>state.courseMenuReducer.data);
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(fetchCourseMenu());
      // eslint-disable-next-line
  },[]);
  const renderCourseMenu=()=>{
      return data&&data.map((item)=>{
        return <li className="dropdown-subitem" key={item.maDanhMuc}><NavLink className={({isActive})=>isActive?"dropdown-item rounded":"dropdown-item"} to={`/list-course-bycategory/${item.maDanhMuc}`}>{item.tenDanhMuc}</NavLink></li>
      })
  }
  const navigate=useNavigate();
  const handleOnChange=(event)=>{
    if(event.target){
      const {value}=event.target;     
      dispatch(actKeyword(value));      
      navigate("/find-course");      
    }
    
  }
  const handleLogout=()=>{
    localStorage.removeItem("User");
    navigate("/login")
  }
  const renderRegisterLoginButton=()=>{
    if(localStorage.getItem("User")){
      return <li className="nav-item mx-auto my-2">  
      <button className="btn btn-outline-warning mx-1 d-md-none d-lg-inline-block" onClick={()=>navigate("/profile")}>Thông tin</button>                      
      <button className="btn btn-warning mx-1 d-md-none d-lg-inline-block" onClick={handleLogout}>Đăng xuất</button>
    </li>  
    }
    else{
      return <li className="nav-item mx-auto my-2">                                      
      <button className="btn btn-outline-warning mx-1 d-md-none d-lg-inline-block" onClick={()=>navigate("/register")}>Đăng ký</button>                    
      <button className="btn btn-outline-warning mx-1 d-md-none d-lg-inline-block" onClick={()=>navigate("/login")}>Đăng nhập</button>           
    </li>  
    }
  }
  if(loading) return <Loader/>
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>          
          <NavLink to=""><img src={require('./Image/cyber-logo.png')} width="200" alt="Logo" /></NavLink>
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
            <li className="btn-group mx-auto">
              <button className="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="navbar-toggler-icon"/> Khóa học đào tạo
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">                  
                  {renderCourseMenu()}
              </ul>
            </li>
            <li className="nav-item mx-auto my-2">
              <input type="text" className="search-box py-2 px-3" placeholder='Tìm kiếm khoá học' onChange={handleOnChange}/>
            </li>  
            {renderRegisterLoginButton()}     
          </ul>          
        </div>        
      </nav>     
    </>
  );
}
