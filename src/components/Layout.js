import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/global.css"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout
