import React from 'react'
import Nav from '../Header/Nav'
import {Outlet} from 'react-router-dom'
import Footer from '../Footer/Footer'

function SharedLayout() {
  return (
    <>
      <Nav/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default SharedLayout
