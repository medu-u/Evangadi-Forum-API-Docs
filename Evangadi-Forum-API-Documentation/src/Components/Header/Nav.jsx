import React from 'react'
import style from './Nav.module.css'
import {Link} from 'react-router-dom'
import NavbarList from '../NavbarList/NavbarList';
import logo from '../../assets/images/10002.png'
import search from '../../assets/images/search-icon-sm.png'
function Nav() {
  return (
    <div className={`${style.navWrapper} fixed-top`}>
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <NavbarList LinkUrl="/login" LinkName="LogIn" />
              <NavbarList LinkUrl="/signup" LinkName="SignUp" />
              <NavbarList LinkUrl="/Question" LinkName="Question" />
              <NavbarList LinkUrl="/answer" LinkName="Answer" />
              <NavbarList LinkUrl="/Support" LinkName="Support" />
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/search/">
                  <img src={search} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
  
}

export default Nav
