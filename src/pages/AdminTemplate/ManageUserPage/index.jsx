import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { Table,Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchListUser } from './ListUser/action';

export default function ManageUserPage() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.listUserReducer.data)

  useEffect(() => {
    dispatch(actFetchListUser())
  },[])
  console.log(data)
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];
  const dataTable = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
  };
  const { Search } = Input;

  return (
    <div className='container mt-3' style={{backgroundColor:"white"}}>
      <form className="text-black rounded py-3 text-center bg-white">
        <h2>Quản lí Người dùng</h2>
        <NavLink to="add-user">
          <button className="btn btn-success my-3">Thêm mới người dùng</button>
        </NavLink>
      </form>

      <Search
        className="mb-3"
        placeholder="Search"
        onSearch={onSearch}
        enterButton
      />
      <Table columns={columns} dataSource={dataTable} onChange={onChange} />
    
      
    </div>
  )
}
