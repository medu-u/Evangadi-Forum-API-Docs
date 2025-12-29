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
