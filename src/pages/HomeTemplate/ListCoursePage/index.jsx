import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Loader from '../_component/Loader';
import { actFetchListCourse } from './duck/action';
import Course from './Course';
export default function ListCoursePage(){    
  const loading=useSelector((state)=>state.listCourseReducerHome.loading);
  const data=useSelector((state)=>state.listCourseReducerHome.data);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(actFetchListCourse()); 
    // eslint-disable-next-line
  },[]);
  const renderCourse=()=>{
    return data?.map((course)=>{
      return <Course key={course.maKhoaHoc} course={course}/>
    })
  }
  if(loading) return <Loader/>
  return (
    <>
      <div className="d-flex justify-content-center mt-4">                
        <div className="container mt-3">
            <h1 className='text-center my-3'>DANH SÁCH CÁC KHOÁ HỌC</h1>
            <div className='row'>{renderCourse()}</div>
            <div className="d-flex justify-content-center">                               
                {/* <ul className="pagination movie-page"> 
                    <li className="page-item"><Link className="page-link" onClick={()=>setPage(page-1)}>Previous</Link></li>
                    {renderPagination()}
                    <li className="page-item"><Link className="page-link" onClick={()=>setPage(page+1)}>Next</Link></li>
                </ul>                     */}
            </div>               
        </div>            
      </div>          
    </>
  )
}
