import React from 'react'
import style from './Nav.module.css'
import {Link} from 'react-router-dom'
import NavbarList from '../NavbarList/NavbarList';
import logo from '../../assets/images/10002.png'

function Nav() {
  return (
    <div className={`${style.navWrapper} fixed-top`}>
      <div>
        <nav className="navbar navbar-toggleable-md navbar-expand-md">
          <button
            style={{ color: "orange" }}
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link className="navbar_brand " to="/">
            <img src={logo} />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <NavbarList LinkUrl="/signup" LinkName="SignUp" />
              <NavbarList LinkUrl="/login" LinkName="LogIn" />
              <NavbarList LinkUrl="/postAnswer" LinkName="Post Answer" />
              <NavbarList LinkUrl="/answer" LinkName="Answer" />
              <NavbarList LinkUrl="/postQuestion" LinkName="Post Question" />
              <NavbarList
                LinkUrl="/singleQuestion"
                LinkName="Single Question"
              />
              <NavbarList LinkUrl="/allQuestion" LinkName="All Question" />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
  
}

export default Nav

