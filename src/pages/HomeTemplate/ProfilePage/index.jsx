import React from "react";
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

export default function ProfilePage() {
  const loading = useSelector((state) => state.profileHomeReducer.loading);
  const data = useSelector((state) => state.profileHomeReducer.data);
  const dispatch = useDispatch();  
  useEffect(() => {
    dispatch(actFetchProfile());
  }, []);
 
  const renderCourse=()=>{
    return data&&data.chiTietKhoaHocGhiDanh.map((course)=>{
      return <Course key={course.maKhoaHoc} course={course} />
    })
  }
  
  if (loading) return <Loader />;
  return (
    <div className="container mt-5">
      <Tabs
      defaultActiveKey="info"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="info" title="Thông tin học viên">
        <div className="card-body d-flex">
          <form>
            <div className="input-group form-group my-2">
              <div
                className="input-group-prepend mx-1"
                style={{ width: "55px" }}
              >
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <div>
                <p className="text-warning">
                  Tài khoản: {data && data.taiKhoan}
                </p>
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
                <p className="text-warning">
                  Mật khẩu: {data && data.matKhau}
                </p>
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
                <p className="text-warning">
                  Họ và tên: {data && data.hoTen}
                </p>
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
                <p className="text-warning">
                  Số điện thoại: {data && data.soDT}
                </p>
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
                <p className="text-warning">
                  Email: {data && data.email}
                </p>
              </div>
              
            </div>
          </form>
          <div className="mx-auto">
            <button className="btn btn-warning">
              Thay đổi thông tin
            </button>
          </div>
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

