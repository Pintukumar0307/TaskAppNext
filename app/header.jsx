// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { LogoutBtn } from "../components/Clients";
// import Hamburger from 'hamburger-react';
// import '../styles/header.scss'



// const Header = () => {
// const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };


//   return (
//     <div className="header">
//       <div className="brand">
//         <h2>Task App.</h2>
//       </div>
//       <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
//       <ul>
//         <li><Link style={{textDecoration:"none",color:"white"}} href={"/"}>Home</Link></li>
//         <li><Link style={{textDecoration:"none",color:"white"}} href={"/profile"}>Profile</Link></li>
//         <LogoutBtn/>
        
//       </ul>
//       </nav>
//        <div className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
//         <div className="menu-btn__burger">
//         <Hamburger />
//         </div>
//         </div>
//     </div>
//   );
// };

// export default Header;

"use client";


import Link from "next/link";
import React, {useState} from "react";
import { LogoutBtn } from "../components/Clients";
import Hamburger from 'hamburger-react'
import '../style/header.css';

const Header = () => {

 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (

    <div className="header">
      <div className="brand">
        <h2>Task App.</h2>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
      <ul>
        <Link href={"/"} style={{textDecoration:"none",color:"white"}}>Home</Link>
        <Link href={"/profile"} style={{textDecoration:"none",color:"white"}}>Profile</Link>
        <div>
           <LogoutBtn />  
        </div>
       </ul>
        </nav>
        <div className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="menu-btn__burger">
        <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default Header;

