import React from 'react';
import './navbar.css';
import { Link, Element } from 'react-scroll';
import { Fade } from 'react-reveal';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from '../redux/allActions'

export default function Navbar() {
   const darkMode = useSelector((state) => state.pageMode.darkMode)
   const dispatch = useDispatch();
   const pageMode = () => {
      localStorage.setItem('darkMode', !darkMode)
      dispatch({ type: setDarkMode, payload: !darkMode })

   }
   return (
      <div className="mainNavbar" >
         <div className="navbar">
            <div className="logo">
               <h3 className="logo">portFolio</h3>
               <div className="navLinks" onClick={() => pageMode()}>
                  {(darkMode) ? <NightsStayIcon /> : <WbSunnyIcon style={{ color: 'yellow' }} />}
               </div>
            </div>
            <div className="navActions">
               <Link className="navLinks " activeClass="navActiveLink" to="home" spy={true} smooth={true} offset={50} duration={500}>
                  Home
               </Link>

               <Link className="navLinks" activeClass="navActiveLink" to="about" spy={true} smooth={true} offset={50} duration={500}>
                  about
               </Link>
               <Link className="navLinks" activeClass="navActiveLink" to="works" spy={true} smooth={true} offset={160} duration={1000}>
                  works
               </Link>

               <Link className="navLinks" activeClass="navActiveLink" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                  contact
               </Link>

            </div>
         </div>
         <Element className="homeContent" name="home" >
            <div className="intro">
               <Fade bottom>
                  <h2>Hi i am Sunpreet </h2>
                  <p> A web developer</p>
                  <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                     <div className="downarrow">
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                  </Link>
               </Fade>
            </div>
         </Element>
      </div>
   )
}