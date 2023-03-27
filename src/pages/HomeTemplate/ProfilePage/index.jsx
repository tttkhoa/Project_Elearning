import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actFetchProfile } from './duck/action';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faKey,faFont,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./style.css"
import Loader from '../_component/Loader';
export default function ProfilePage() {
  const loading=useSelector((state)=>state.profileHomeReducer.loading);
  const data=useSelector((state)=>state.profileHomeReducer.data);
  const dispatch=useDispatch();
  const[page,setPage]=useState(1);
  useEffect(()=>{
    dispatch(actFetchProfile());
  },[])  
  const renderPagination=()=>{
    let n=data?.totalPages;          
    let array=[];
    if(n){
        for(let i=0;i<n;i++){
            array[i]=i+1;
        }       
    } 
    return array?.map((id,i)=>{            
        return <li className={`${i+1===page?"active page-item":"text-dark page-item inactive"}`} key={id} onClick={()=>setPage(id)}><Link className="page-link">{`${id}`}</Link></li>
    })
}    
  if(loading) return <Loader/>
  return (
    <>
    <div className="d-flex justify-content-center mt-4">
            <div className="container">                
                <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#info">
                            Thông tin cá nhân
                        </a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" data-toggle="pill" href="#course">
                            Thông tin khoá học
                        </a>
                    </li>            
                </ul>
                <div className="tab-content shadow-none">
                    <div id="info" className="container tab-pane faded active">
                    <div className="card-body d-flex">
                      <form>
                        <div className="input-group form-group my-2">
                          <div className="input-group-prepend mx-1" style={{width:"55px"}}>
                            <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                          </div>
                          <div>
                            <p className='text-warning'>Tài khoản: {data&&data.taiKhoan}</p>
                          </div>                  
                        </div>
                        <div className="input-group form-group my-2">
                          <div className="input-group-prepend mx-1" style={{width:"55px"}}>
                            <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
                          </div>
                          <div>
                          <p className='text-warning'>Mật khẩu: {data&&data.matKhau}</p>
                          </div>                  
                        </div>
                        <div className="input-group form-group my-2">
                          <div className="input-group-prepend mx-1" style={{width:"55px"}}>
                            <span className="input-group-text"><FontAwesomeIcon icon={faFont} /></span>
                          </div>
                          <div>
                          <p className='text-warning'>Họ và tên: {data&&data.hoTen}</p>

                          </div>                  
                        </div>
                        <div className="input-group form-group my-2">
                          <div className="input-group-prepend mx-1" style={{width:"55px"}}>
                            <span className="input-group-text"><FontAwesomeIcon icon={faPhone} /></span>
                          </div>
                          <div>
                          <p className='text-warning'>Số điện thoại: {data&&data.soDT}</p>

                          </div>                  
                        </div>
                        <div className="input-group form-group my-2">
                          <div className="input-group-prepend mx-1" style={{width:"55px"}}>
                            <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                          </div>
                          <div>  
                          <p className='text-warning'>Email: {data&&data.email}</p>
                          </div>                  
                        </div>                      
                      </form>
                      <div className='mx-auto'>
                        <button className='btn btn-warning'>Thay đổi thông tin</button>
                      </div>
                  </div>
                    </div>
                      <div id="course" className="container tab-pane faded">
                          <div className="row">
                              
                          </div>
                          <div className="container mt-3">
                          <div className="d-flex justify-content-center">                               
                            <ul className="pagination movie-page"> 
                              <li className="page-item"><Link className="page-link" onClick={()=>page===1?setPage(1):setPage(page-1)}>Trang trước</Link></li>
                              {renderPagination()}
                              <li className="page-item"><Link className="page-link" onClick={()=>page===data.totalPages?setPage(data.totalPages):setPage(page+1)}>Trang kế</Link></li>
                            </ul>                    
                          </div>               
                      </div>  
                    </div>
                </div>                          
            </div>
        </div>
    </>
  )
}
