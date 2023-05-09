import { useState } from "react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

import "./navbar.css"
import logo from "../../assets/logo.svg"

const Menu = () => {
   return (
      <>
         <p>
            <a href="#home">Home</a>
         </p>
         <p>
            <a href="#wgpt3">What is GPT3?</a>
         </p>
         <p>
            <a href="#possibility">Open AI</a>
         </p>
         <p>
            <a href="#features">Case Studies</a>
         </p>
         <p>
            <a href="#blog">Library</a>
         </p>
      </>
   )
}

function Navbar() {
   const [toggleMenu, setToggleMenu] = useState(false)

   return (
      <div className="navbar">
         <div className="navbar__links">
            <div className="navbar__logo">
               <img src={logo} alt="logo" />
            </div>
            <div className="navbar__links-container">
               <Menu />
            </div>
         </div>

         <div className="navbar__sign">
            <p>Sign In</p>
            <button type="button">Sign Up</button>
         </div>

         <div className="navbar__menu">
            {toggleMenu ? (
               <RiCloseLine
                  color="#fff"
                  size={27}
                  onClick={() => setToggleMenu(false)}
               />
            ) : (
               <RiMenu3Line
                  color="#fff"
                  size={27}
                  onClick={() => setToggleMenu(true)}
               />
            )}

            {toggleMenu ? (
               <div className="navbar__menu-container scale-up-center">
                  <div className="navbar__menu-container__links">
                     <div onClick={() => setToggleMenu(false)}>
                        <Menu />
                     </div>
                     <div className="navbar__menu-container__sign">
                        <p>Sign In</p>
                        <button type="button">Sign Up</button>
                     </div>
                  </div>
               </div>
            ) : null}
         </div>
      </div>
   )
}

export default Navbar
