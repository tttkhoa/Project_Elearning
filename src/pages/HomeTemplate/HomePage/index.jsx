import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../_component/Loader";
import { actFetchCourseHomePage } from "./duck/action";
import Course from "./Course";
import "./../ListCoursePage/Course/style.css";
import { NavLink } from "react-router-dom";
import { Pagination } from "antd";
export default function HomePage() {

  const { data, loading } = useSelector((state) => state.courseHomepageReducer);

  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchCourseHomePage(1));
  }, []);

  const renderCourse = () => {
    return data?.items.map((course) => {
      return <Course key={course.maKhoaHoc} course={course} />;
    });
  };

  if (loading) return <Loader />;

  return (
    <>
      {/* <div className="carousel row mx-0">
        <NavLink className="carousel-button" to="/list-course">
          Xem các khoá học
        </NavLink>
      </div> */}
      <div className="d-flex justify-content-center mt-4">
        <div className="container">
          <h1 className="text-center my-3">CÁC KHOÁ HỌC NỔI BẬT</h1>
          <div className="row">{renderCourse()}
          <Pagination
            className="text-center mb-3"
            pageSize={8}
            current={data?.currentPage}
            total={data?.totalCount}
            onChange={(page) => {
              dispatch(actFetchCourseHomePage(page));
            }}
          />
          </div>

        </div>
      </div>
    </>
  );
}
