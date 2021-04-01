import React from 'react'
import { Fade } from 'react-reveal';
import { Element } from 'react-scroll';
import './contact.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useSelector } from 'react-redux';
export default function Contact() {
   const darkMode = useSelector((state) => state.pageMode.darkMode)
   return (

      <Element name="contact">
         <Fade bottom>
            <div className="mainContainer1" >
               <div className="email" style={{ color: (darkMode) ? "white" : "gray" }}>
                  <h2>Tell your Review and Suggestions</h2>
                  <form >
                     <div className="frma" >
                        <div className="inptxt">
                           <p>Name</p>
                           <input className="txt" type="text"></input>
                        </div>
                        <div className="inptxt">
                           <p>Email</p>
                           <input className="txt" type="text"></input>
                        </div>
                        <div className="inptxt">
                           <p>Comments</p>
                           <textarea name="para" className="txt" style={{ height: '150px' }} cols="30" rows="10"></textarea>
                        </div>
                        <div style={{ textAlign: 'left', marginLeft: '6.2%', marginTop: '30px' }} className="resp">
                           <button className="btn1">Submit</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="extrnlLinks">
                  <a href="https://github.com/singhsunpreet98s" target="_blank">
                     <GitHubIcon className={(darkMode) ? "darkIc" : "lightIc"} fontSize="large" />
                  </a>
                  <a href="https://www.linkedin.com/in/sunpreet-singh-97a807183/" target="_blank">
                     <LinkedInIcon className={(darkMode) ? "darkIc" : "lightIc"} fontSize="large" />
                  </a>
                  <a href="https://www.instagram.com/__sunpreeet__/" target="_blank">
                     <InstagramIcon className={(darkMode) ? "darkIc" : "lightIc"} fontSize="large" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100003462150071" target="_blank">
                     <FacebookIcon className={(darkMode) ? "darkIc" : "lightIc"} fontSize="large" />
                  </a>
                  <a href="https://twitter.com/sunnysingh98s" target="_blank">
                     <TwitterIcon className={(darkMode) ? "darkIc" : "lightIc"} fontSize="large" />
                  </a>
               </div>
            </div>
         </Fade>
      </Element>
   )
}
