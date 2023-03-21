import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { actAddCourse, actFetchCategoryCourse, actLayDanhSachNguoiDung, actUploadImg } from "./duck/action";

export default function AddCoursePage() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [image,setImg] = useState('')
  const dispatch = useDispatch();
  const { categoryCourse } = useSelector((state) => state.addCourseReducer);
  const listUser = useSelector((state) => state.listUserReducer.data);

  const convertNguoiTao = () => {
    let listUserGV = listUser?.filter(user => user.maLoaiNguoiDung === "GV")
    return listUserGV?.map((user,index) => {
         return { value: user.hoTen, label: user.hoTen };
    })
  }

  useEffect(() => {
    dispatch(actFetchCategoryCourse());
  }, []);

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: {},
      maNhom: "GP01",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
    },
    onSubmit: (values) => {
      console.log(values);
      let formData = new FormData()
      for (let key in values) {
        if (key !== 'hinhAnh'){
          formData.append(key,values[key])
        } else {
          formData.append('File',values.hinhAnh,values.hinhAnh.name)
        }
      }
      dispatch(actAddCourse(formData))
    },
  });


  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeDatePicker = (value) => {
    let ngayTao = dayjs(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayTao", ngayTao);
  };

  const handleChangetaiKhoanNguoiTao = (value) => {
    formik.setFieldValue("taiKhoanNguoiTao", value);
  };

  const handleChangeDanhMuc = (value) => {
    formik.setFieldValue("maDanhMucKhoaHoc", value);
  };

  const handleChangeFile = (e) => {
    let file = e.target.files[0]
    if(file.type === "image/png" || file.type === "image/jpeg"||  file.type === "image/gif"||  file.type === "image|| png"){
      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        setImg(e.target.result)
      }
    }
    formik.setFieldValue('hinhAnh',file)
  } 

  return (
    <div className="container mt-3" style={{ backgroundColor: "white" }}>
      <ol className="breadcrumb mb-4 p-2">
        <li className="breadcrumb-item">
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to="/admin/manage-course">Manage Course</NavLink>
        </li>
        <li className="breadcrumb-item active">Add Course</li>
      </ol>

      <form className="text-black rounded py-3 text-center bg-white">
        <h2>Thêm mới khóa học</h2>
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
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="row">
          <div className="col-6">
            <Form.Item label="Mã khóa học">
              <Input name="maKhoaHoc" onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Tên khóa học">
              <Input name="tenKhoaHoc" onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Danh mục khóa học">
              <Select
                options={categoryCourse?.map((item, index) => {
                  return { value: item.maDanhMuc, label: item.tenDanhMuc };
                })}
                onChange={handleChangeDanhMuc}
                placeholder="Chọn danh mục khóa học"
              />
            </Form.Item>

            <Form.Item label="Ngày tạo">
              <DatePicker
                format={"DD/MM/YYYY"}
                onChange={handleChangeDatePicker}
              />
            </Form.Item>

            <Form.Item label="Mô tả">
              <Input name="moTa" onChange={formik.handleChange} />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item label="Đánh giá">
              <InputNumber
                onChange={handleChangeInputNumber("danhGia")}
                min={1}
                max={10}
              />
            </Form.Item>

            <Form.Item label="Lượt xem">
              <InputNumber
                onChange={handleChangeInputNumber("luotXem")}
                min={1}
                max={100}
              />
            </Form.Item>

            <Form.Item label="Người tạo">
              <Select
                options={convertNguoiTao()}
                onChange={handleChangetaiKhoanNguoiTao}
                placeholder="Chọn người tạo"
              />
            </Form.Item>

            <Form.Item label="Hình ảnh">
            <input type="file" onChange={handleChangeFile} accept="image/png,image/jpeg,image/gif,image,png"  />
            <img className="my-2" alt="" src={image} style={{width:200,height:200}} />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          style={{ textAlign: "left", marginTop: "30px", marginLeft: "200px" }}
        >
          <Button type="submit" htmlType="submit" className="btn-success me-3">
            Thêm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
