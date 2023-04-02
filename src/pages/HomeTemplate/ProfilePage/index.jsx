import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { actFetchProfile } from "./duck/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faKey,faFont,faPhone,faEnvelope,} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Loader from "../_component/Loader";
import Course from "../_component/Course";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { actFetchUpdateProfile } from "./duck/action";
export default function ProfilePage() {
  const loading = useSelector((state) => state.profileHomeReducer.loading);
  const data =useSelector((state) => state.profileHomeReducer.data);
  // const error=useSelector((state) => state.profileUpdateHomeReducer.error);  
  const dispatch = useDispatch(); 
  const [profile,setProfile]=useState({
      taiKhoan: data&&data.taiKhoan,
      matKhau: data&&data.matKhau,
      hoTen: data&&data.hoTen,
      soDT: data&&data.soDT,
      maLoaiNguoiDung: data&&data.maLoaiNguoiDung,
      maNhom: "GP01",
      email:data&&data.email,
  })
  useEffect(() =>{
    dispatch(actFetchProfile());   
  }, []);
  console.log(profile);
  const [disabled,setDisabled]=useState(true);
  const handleOnClickEdit=()=>{
    setDisabled(false);
  }
  const handleOnChange=(e)=>{
    const {name,value}=e.target;
    setProfile({...profile,[name]:value})
  }
  const handleOnClickUpdate=()=>{
    dispatch(actFetchUpdateProfile(profile));
  }
  const renderCourse=()=>{
    return data&&data.chiTietKhoaHocGhiDanh.map((course)=>{
      return <Course key={course.maKhoaHoc} course={course} />
    })
  }  
   
  console.log(profile);
  if (loading) return <Loader />;
  return (
    <div className="container mt-5">
      <Tabs
      defaultActiveKey="info"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="info" title="Thông tin học viên">
        <div className="card-body">
          <form className="d-block">
            <div className="mx-auto form-info">
              <div className="input-group form-group my-2 d-flex">
                <div
                  className="input-group-prepend mx-1"
                  style={{ width: "55px" }}
                >
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                </div>
                <div>
                  <input className="text-warning info-input px-1" value={profile&&profile.taiKhoan} name="taiKhoan" disabled/>            
                </div>
              </div>
              <div className="input-group form-group my-2">
                <div
                  className="input-group-prepend mx-1"
                  style={{ width: "55px" }}
                >
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                </div>
                <div>
                  <input className="text-warning info-input px-1" value={profile&&profile.matKhau} name="matKhau" disabled={disabled} onChange={handleOnChange} required onClick={handleOnClickEdit}/>
                </div>
              </div>
              <div className="input-group form-group my-2">
                <div
                  className="input-group-prepend mx-1"
                  style={{ width: "55px" }}
                >
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faFont} />
                  </span>
                </div>
                <div>
                  <input className="text-warning info-input px-1" value={profile.hoTen&&profile.hoTen} name="hoTen" disabled={disabled} onChange={handleOnChange} required/>
                </div>
              </div>
              <div className="input-group form-group my-2">
                <div
                  className="input-group-prepend mx-1"
                  style={{ width: "55px" }}
                >
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                </div>
                <div>
                  <input className="text-warning info-input px-1" value={profile.soDT&&profile.soDT} name="soDT" disabled={disabled} onChange={handleOnChange} required/>

                </div>
              </div>
              <div className="input-group form-group my-2">
                <div
                  className="input-group-prepend mx-1"
                  style={{ width: "55px" }}
                >
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </div>
                <div>
                <input className="text-warning info-input px-1" value={profile.email&&profile.email} name="email" disabled={disabled} onChange={handleOnChange} required/>

                </div>
                
              </div>
            </div>            
            <div>
              <button className="btn btn-warning d-block mx-auto my-2" onClick={handleOnClickEdit}>
                Thay đổi thông tin
              </button>
              <button className="btn btn-success d-block mx-auto " onClick={handleOnClickUpdate}>
                Cập nhật
              </button>
            </div>
          </form>          
        </div>
        </Tab>
      <Tab eventKey="course" title="Thông tin khoá học">
        <div className="row">
          {renderCourse()}
        </div>
      </Tab>
      
    </Tabs>
    </div>
    
    
  );
}

