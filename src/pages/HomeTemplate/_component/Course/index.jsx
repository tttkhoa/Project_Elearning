import React from 'react'
import "./style.css";
import { NavLink } from 'react-router-dom';
import { actFetchRegisterCourse } from './duck/action';
import { actFetchCancelCourse } from './duck/action';
import { useDispatch, useSelector } from 'react-redux';
export default function Course(props) {  
    const data=useSelector((state)=>state.profileHomeReducer.data);
    const error=useSelector((state)=>state.profileHomeReducer.error);
    const dispatch=useDispatch();
    if(localStorage.getItem("User")){        
        const { course } = props;    
        const info={
            maKhoaHoc:course.maKhoaHoc,
            taiKhoan:JSON.parse(localStorage.getItem("User")).taiKhoan,
        }    
        
        const handleOnClickRegister=()=>{            
            dispatch(actFetchRegisterCourse(info));
            alert("Đăng kí thành công");
            this.forceUpdate();
            
        }    
        const handleOnClickCancel=()=>{
            dispatch(actFetchCancelCourse(info)); 
            alert("Huỷ thành công"); 
            this.forceUpdate();                 
        }
       
        const renderRegisterButton=()=>{
            
            const result=data&&data.chiTietKhoaHocGhiDanh.find(item=>item.maKhoaHoc===course.maKhoaHoc);
            if(result){
                
                return <NavLink className='btn btn-warning right-button' to="#" onClick={handleOnClickCancel}>Huỷ</NavLink>
            }
            else{
                return <NavLink className='btn btn-warning right-button' to="#" onClick={handleOnClickRegister}>Đăng ký</NavLink>
            }
            
        }    
        const renderNotification = () => {    
            return (
              error && (
                <div className="alert alert-danger d-block mx-auto my-3" style={{fontSize:"14px",width:"87%"}}>{error}</div>
              )
            );
          };
        return (
        <>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 course-list mx-0">
                <div className="course-overlay">
                    <div className="course-button">              
                        <NavLink className="btn btn-warning left-button" to={`/detail-course/${course.maKhoaHoc}`}>Chi tiết</NavLink>
                        {renderRegisterButton()}            
                    </div>            
                </div>
                <div className="card my-2 course-card border">
                    <img className="card-img-top img-fluid" src={course.hinhAnh} alt={course.maKhoaHoc}/>
                    <div className="card-body">
                      <h5 className="card-title text-center">{course.tenKhoaHoc}</h5>
                      <div className="d-flex descrip">                      
                          <p>Lượt xem: {course.luotXem}</p>
                      </div>
                    </div>
                    {renderNotification()}
                </div> 
               
            </div>
        </>
      )
    }
    else{       
        const { course } = props;          
        return (
        <>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 course-list mx-0">
                <div className="course-overlay">
                    <div className="course-button">              
                        <NavLink className="btn btn-warning left-button" to={`/detail-course/${course.maKhoaHoc}`}>Chi tiết</NavLink>
                        <NavLink className="btn btn-warning right-button" onClick={()=>alert("Cần đăng nhập để đăng ký")}>Đăng ký</NavLink> 
                    </div>            
                </div>
                <div className="card my-2 course-card border">
                    <img className="card-img-top img-fluid" src={course.hinhAnh} alt={course.maKhoaHoc}/>
                    <div className="card-body">
                      <h5 className="card-title text-center">{course.tenKhoaHoc}</h5>
                      <div className="d-flex descrip">                      
                          <p>Lượt xem: {course.luotXem}</p>
                      </div>
                    </div>                    
                </div>                
            </div>
        </>
      )
    }
    
}
