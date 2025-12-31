import React from 'react'
import style from './Nav.module.css'
import {Link} from 'react-router-dom'
import NavbarList from '../NavbarList/NavbarList';
import logo from '../../assets/images/10002.png'

function Nav() {
  return (
    <div className={`${style.navWrapper} fixed-top`}>
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
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



// import React, { useEffect, useState } from 'react'
// import style from "./Nav.module.css";
// import logo from "../../assets/images/10002.png";
// import NavbarList from '../NavbarList/NavbarList';
// import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/close';


// function Nav() {
//   const [show, setShow] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShow(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         style={{
//           backgroundColor: show ? "rgb(17,17,17)" : "transparent",
//         }}
//         className={`${style.navbar} ${open ? style.navbarOpen : ""}`}
//       >
//         <div className={style.leftNavContainer}>
//           <ul
//             className={`${style.links} ${open ? style.active : ""}`}
//           >
//             <li>
//               <Link className="navbar-brand mx-auto" to="/">
//                 <img src={logo} />
//               </Link>
//             </li>
//             <NavbarList LinkUrl="/login" LinkName="LogIn" />
//             <NavbarList LinkUrl="/signup" LinkName="SignUp" />
//             <NavbarList LinkUrl="/Question" LinkName="Question" />
//             <NavbarList LinkUrl="/answer" LinkName="Answer" />
//             <NavbarList LinkUrl="/Support" LinkName="Support" />
//           </ul>
//         </div>

//         <div className={style.menu} onClick={() => setOpen(!open)}>
//           {open ? (
//             <CloseIcon style={{ fontSize: 28 }} />
//           ) : (
//             <MenuIcon style={{ fontSize: 28 }} />
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Nav
// import React, { useState } from "react";
// import style from "./Nav.module.css";
// import { Link } from "react-router-dom";
// import logo from "../../assets/images/10002.png"
// function Nav() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <div className={style.navWrapper}>
//         <nav className={style.navbar}>
//           <Link className="navbar-brand" to="/">
//             <img src={logo} alt="Logo" />
//           </Link>

//           <div className={style.navbar_collapse}>
//             <ul>
//               <li>
//                 <Link to="/login">LogIn</Link>
//               </li>
//               <li>
//                 <Link to="/signup">SignUp</Link>
//               </li>
//               <li>
//                 <Link to="/question">Question</Link>
//               </li>
//               <li>
//                 <Link to="/answer">Answer</Link>
//               </li>
//             </ul>
//           </div>

//           <button
//             className={style.menuButton}
//             onClick={() => setMenuOpen(true)}
//           >
//             ☰
//           </button>
//         </nav>
//       </div>

//       <div className={`${style.mobileMenu} ${menuOpen ? "show" : ""}`}>
//         <button
//           className={style.closeButton}
//           onClick={() => setMenuOpen(false)}
//         >
//           ×
//         </button>
//         <ul>
//           <li>
//             <Link to="/" onClick={() => setMenuOpen(false)}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/login" onClick={() => setMenuOpen(false)}>
//               LogIn
//             </Link>
//           </li>
//           <li>
//             <Link to="/signup" onClick={() => setMenuOpen(false)}>
//              SignUp
//             </Link>
//           </li>
//           <li>
//             <Link to="/question" onClick={() => setMenuOpen(false)}>
//              Question
//             </Link>
//           </li>
//           <li>
//             <Link to="/answer" onClick={() => setMenuOpen(false)}>
//              Answer
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Nav;

