import React, { useState } from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import NavbarList from "../NavbarList/NavbarList";
import logo from "../../assets/images/EvangadiLogo.jpeg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${style.navWrapper} fixed-top`}>
      <nav className={style.navigation}>
        <div className={style.container}>
          {/* Logo */}
          <div className={style.evLogo__continer}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* Custom Hamburger (from first component) */}
          <div className={style.hamburger} onClick={() => setIsOpen(!isOpen)}>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
          </div>

          {/* Menu */}
          <div className={`${style.nav__links} ${isOpen ? style.open : ""}`}>
            <NavbarList LinkUrl="/signup" LinkName="SignUp" />
            <NavbarList LinkUrl="/login" LinkName="LogIn" />
            <NavbarList LinkUrl="/postAnswer" LinkName="Post Answer" />
            <NavbarList LinkUrl="/answer" LinkName="Answer" />
            <NavbarList LinkUrl="/postQuestion" LinkName="Post Question" />
            <NavbarList LinkUrl="/allQuestion" LinkName="All Question" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
