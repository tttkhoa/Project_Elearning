import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faPhone } from '@fortawesome/free-solid-svg-icons'
export default function FooterHomePage() {
  return (
    <div className='row bg-dark'>
      <div className='col-xl-4 col-lg-6 col-sm-12 mt-3 px-5 left-content'>
        <div className='logo-footer'>
          <img src={require('./Image/cyber-logo.png')} width="200" alt="Logo" />
          <p className='text-white'>Cybersoft Academy - Hệ thống đào tạo lập trình chuyên sâu theo dự án thực tế</p>
        </div>
        <div>
          <h5 className='text-white'>NHẬN TIN SỰ KIỆN VÀ KHUYẾN MÃI</h5>
          <p className='text-white'>Cybersoft sẽ gửi các khoá học trực tuyến và các chương trình CyberLive hoàn toàn MIỄN Phí
            và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn
          </p>
          <div className='d-flex input-register'>
            <input type="text" placeholder='your address@email.com'/>
            <button className='btn btn-outline-warning'>Đăng ký</button>
          </div>
          <hr className='text-white'></hr>
          <div>
            <h5 className='text-white'>LIÊN HỆ</h5>
            <p className='text-white'><FontAwesomeIcon icon={faLocationDot} /> Cơ sở 1: 376 Võ Văn Tần - Quận 3</p>
            <p className='text-white'><FontAwesomeIcon icon={faLocationDot} /> Cơ sở 2: 459 Sư Vạn Hạnh - Quận 10</p>
            <p className='text-white'><FontAwesomeIcon icon={faLocationDot} /> Cơ sở 3: 82 Ung Văn Khiêm - Bình Thạnh</p>
            <p className='text-white'><FontAwesomeIcon icon={faLocationDot} /> Cơ sở 4: Đà Nẵng - Quận Hai Châu</p>
            <p className='text-white'><FontAwesomeIcon icon={faPhone} /> 0123.456.789</p>
          </div>
        </div>
      </div>
      <div className='col-xl-4 col-lg-6 col-sm-12 mt-3 px-5 center-content'>
        <form>
            <h3 style={{"color":"#fec235"}}>ĐĂNG KÍ TƯ VẤN</h3>
            <div>
              <input type="text" name='fullname' className='' placeholder='Họ và tên *'/>
            </div>
            <div>
              <input type="email" name='email' className='' placeholder='Email liên hệ *'/>
            </div>
            <div>
              <input type="number" name='phone' className='' placeholder='Điện thoại liên hệ *'/>
            </div>
            <h5 className='mt-2' style={{"color":"#fec235"}}>Nhấn vào ô bên dưới để xác nhận</h5>
            <button className='btn btn-outline-warning'>ĐĂNG KÝ TƯ VẤN</button>
        </form>
        
      </div>
      <div className='col-xl-4 col-lg-6 col-sm-12 mt-3 px-5'>

      </div>
    </div>
  )
}
