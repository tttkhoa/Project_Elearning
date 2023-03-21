import React from 'react'
import { json, NavLink } from "react-router-dom";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actUpdateUser } from './UpdateUser/action';

export default function EditUserPage() {
    const user = JSON.parse(localStorage.getItem('UserEdit'))

    const onFinish = (values) => {
        console.log("Success:", values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
    
      const dispatch = useDispatch()
      const error = useSelector(state => state.updateUserReducer.error)
    
      const renderNoti = () => {
            return (
                error && <div className="alert alert-danger d-inline-block">{error.data}</div>
            )
      }
    
      const formik = useFormik({
        initialValues:{
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            hoTen: user.hoTen,
            soDt: user.soDt,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
            maNhom: "GP03",
            email: user.email,
        },
        onSubmit:(values) => {
            console.log(values)
            dispatch(actUpdateUser(values))
        } 
      })
    
      const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    
      const handleChangeLoaiNguoiDung = (value) => {
        formik.setFieldValue('maLoaiNguoiDung',value)
      };

  return (
        <div className="container mt-3" style={{ backgroundColor: "white" }}>
      <ol className="breadcrumb mb-4 p-2">
        <li className="breadcrumb-item">
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to="/admin/manage-user">Manage User</NavLink>
        </li>
        <li className="breadcrumb-item active">Edit User</li>
      </ol>

      <form className="text-black rounded py-3 text-center bg-white">
        <h2>Chỉnh sửa người dùng</h2>
        {renderNoti()}

      </form>

      <Form
        onSubmitCapture={formik.handleSubmit}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        // style={{
        //   maxWidth: 600,
        // }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="row">
          <div className="col-6">
            <Form.Item label="Tài khoản">
              <Input name="taiKhoan" onChange={formik.handleChange} value={formik.values.taiKhoan} disabled={true} />
            </Form.Item>

            <Form.Item label="Mật khẩu">
              <Input name="matKhau"  onChange={formik.handleChange} value={formik.values.matKhau} />
            </Form.Item>

            <Form.Item label="Họ tên">
              <Input name="hoTen"   onChange={formik.handleChange} value={formik.values.hoTen}/>
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item label="Email">
              <Input name="email"  onChange={formik.handleChange}  value={formik.values.email}/>
            </Form.Item>

            <Form.Item label="Số điện thoại">
              <Input name="soDT"  onChange={formik.handleChange} value={formik.values.soDt} />
            </Form.Item>

            <Form.Item label="Loại người dùng">
              <Select
                options={[
                {value:'GV',label:'Giáo vụ'},
                {value:'HV',label:'Học viên'}
                ]}
                onChange={handleChangeLoaiNguoiDung}
                placeholder="Chọn loại người dùng"
                value={formik.values.maLoaiNguoiDung}
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item style={{textAlign:"left",marginTop:"30px",marginLeft:"200px"}}>
          <Button type="submit" htmlType="submit" className="btn-warning me-3">
            Cập nhật
          </Button>
        </Form.Item>
        
      </Form>
    </div>
  )
}
