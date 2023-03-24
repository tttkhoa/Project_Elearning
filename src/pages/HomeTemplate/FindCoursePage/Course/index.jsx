import React from 'react'
import "./../../ListCoursePage/Course/style.css";
import { NavLink } from 'react-router-dom';

export default function Course(props) {
    const { course } = props;
    
  return (
    <>
        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 course-list">
            <div className="course-overlay">
                <div className="course-button">              
                    <NavLink className="btn btn-warning left-button" to={`/detail-course/${course.maKhoaHoc}`}>Chi tiết</NavLink>
                    <NavLink className='btn btn-warning right-button' to="#">Đăng ký</NavLink>             
                </div>            
            </div>
            <div className="card my-2 course-card border">
                <img className="card-img-top img-fluid" src={course.hinhAnh} alt={course.maKhoaHoc}/>
                <div className="card-body">
                  <h5 className="card-title text-center">{course.tenKhoaHoc}</h5>
                  <div className="d-flex descrip">                      
                      <p className='view-count'>Lượt xem: {course.luotXem}</p>
                  </div>
                </div>
            </div>   
        </div>
    </>
  )
}
