import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "./_component/Footer";
import Header from "./_component/Header";

export default function AdminTemplate() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
