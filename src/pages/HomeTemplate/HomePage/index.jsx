import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Loader from '../_component/Loader';
import { actFetchCourseHomePage } from './duck/action';
import Course from './Course';
import "./../ListCoursePage/Course/style.css";
import { NavLink } from 'react-router-dom';
export default function HomePage() {
    const loading=useSelector((state)=>state.courseHomepageReducer.loading);
    const data=useSelector((state)=>state.courseHomepageReducer.data);
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(actFetchCourseHomePage());
      // eslint-disable-next-line 
    },[])    
    const renderCourse=()=>{
      return data?.map((course)=>{
        return <Course key={course.maKhoaHoc} course={course}/>
      })
    }
    if(loading) return <Loader/>
    return (
      <>
        <div className="carousel row mx-0">          
            <NavLink className='carousel-button' to="/list-course">Xem các khoá học</NavLink>         
        </div>
        <div className="d-flex justify-content-center mt-4">                
          <div className="container">
              <h1 className='text-center my-3'>CÁC KHOÁ HỌC NỔI BẬT</h1>
              <div className='row'>{renderCourse()}</div>  
          </div>            
        </div>          
      </>
    )
}

