import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actAddUser, actFetchLoaiNguoiDung } from "./duck/action";
import * as Yup from "yup"

export default function AddUserPage() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const dispatch = useDispatch()
  const error = useSelector(state => state.addUserReducer.error)

  useEffect(() => {
    dispatch(actFetchLoaiNguoiDung())
  },[])

  const loaiNguoiDung = useSelector((state) => state.addUserReducer.loaiNguoiDung)
  const renderNoti = () => {
        return (
            error && <div className="alert alert-danger d-inline-block">{error.data}</div>
        )
  }

  const formik = useFormik({
    initialValues:{
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "",
        maNhom: "GP03",
        email: ""
    },
    validationSchema:Yup.object({
      taiKhoan:Yup.string().required("Tài khoản không được để trống!").min(3,"Tài khoản phải trên 3 kí tự"),
      matKhau:Yup.string().required("Mật khẩu không được để trống!").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,"Vui lòng mật khẩu có chữ thường,chữ in hoa,số và kí tự đặc biệt!"),
      email:Yup.string().required("Email không được để trống!").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Vui lòng nhập đúng dịnh dạng email!"),
      soDT:Yup.string().required("Số điện thoại không được để trống!").matches(/^[0-9]+$/,"Vui lòng nhập số điện thoại hợp lệ!")
    }),
    onSubmit:(values) => {
        console.log(values)
        dispatch(actAddUser(values))
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
        <li className="breadcrumb-item active">Add User</li>
      </ol>

      <form className="text-black rounded py-3 text-center bg-white">
        <h2>Thêm mới người dùng</h2>
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
              <Input name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur}  />
              {formik.touched.taiKhoan && formik.errors.taiKhoan && (<p className="alert alert-danger mt-2 mb-0">{formik.errors.taiKhoan}</p>)}
            </Form.Item>

            <Form.Item label="Mật khẩu">
              <Input name="matKhau"  onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Họ tên">
              <Input name="hoTen"   onChange={formik.handleChange}/>
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item label="Email">
              <Input name="email"  onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Số điện thoại">
              <Input name="soDT"  onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Loại người dùng">
              <Select
                options={loaiNguoiDung?.map((item) => {
                  return {value:item.maLoaiNguoiDung,label:item.tenLoaiNguoiDung}
                } )}
                onChange={handleChangeLoaiNguoiDung}
                placeholder="Chọn loại người dùng"
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item style={{textAlign:"left",marginTop:"30px",marginLeft:"200px"}}>
          <Button type="submit" htmlType="submit" className="btn-success me-3">
            Thêm
          </Button>
        </Form.Item>
        
      </Form>
    </div>
  );
}
