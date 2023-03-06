import React,{ useState }  from 'react'
import { Outlet } from 'react-router-dom';
import { UserOutlined,ReadOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink } from 'react-router-dom';

export default function AdminTemplate() {
  const { Header, Content, Footer, Sider } = Layout;

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem('Quản lý người dùng', 'sub1', <UserOutlined />),
    getItem('Quản lý khóa học', 'sub2', <ReadOutlined />)
  ];
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (

  <Layout
  style={{
    minHeight: '100vh',
  }}
>
  <Sider >
    <div className='p-2 logo'>
      <img src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png" width={170} alt="" />
    </div>
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
  </Sider>
  <Layout className="site-layout">
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    />
    <Content
      style={{
        margin: '0 16px',
      }}
    >
      <div>
        <Outlet/>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Project E-learning Cybersoft 2023
    </Footer>
  </Layout>
</Layout>

  )
}
