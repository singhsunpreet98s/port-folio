import React from 'react';
import { Fade, Flip } from 'react-reveal';
import { Element } from 'react-scroll';
import './about.css';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import StorageIcon from '@material-ui/icons/Storage';
import reactLogo from './images/react1.png';
import node from './images/node.png';
import firebaseLogo from './images/firebase.png';
import jsLogo from './images/js.png';
import pythonLogo from './images/python.png';
import d3Logo from './images/d3.svg';
import sqlLogo from './images/sql.png';
import mongodbLogo from './images/mongodb.png';
import opencvLogo from './images/opencv.png';
import npLogo from './images/np.png';
import reactnativeLogo from './images/native.png';
import djangoLogo from './images/django.png'
import restFrameworkLogo from './images/rest_framework.png'
import { useSelector } from 'react-redux'

const works = [
   {
      img: './images/react.png',
      name: 'react'
   },
   {
      img: './images/firebase.png',
      name: 'firebase'
   }
]

const iconSty = {
   fontSize: "70px",
   textAlign: "center"
}
const pSty = {
   fontSize: "12px",

}
export default function About() {
   const darkMode = useSelector((state) => state.pageMode.darkMode)
   return (
      <Element name="about">
         <div className="about" style={{ color: (darkMode) ? "white" : "black" }}>
            <Fade bottom cascade>
               <div className="cont1" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: '0px 10%' }}>
                  <div className="containerDo">
                     <SettingsBrightnessIcon className="iconSty" />
                     <p className="pSty">UI design</p>
                  </div>
                  <div className="containerDo">
                     <DesktopMacIcon className="iconSty" />
                     <p className="pSty"> Web Development</p>
                  </div>
                  <div className="containerDo">
                     <DeveloperModeIcon className="iconSty" />
                     <p className="pSty"> MobileApp development</p>
                  </div>
                  <div className="containerDo">
                     <StorageIcon className="iconSty" />
                     <p className="pSty"> Database</p>
                  </div>
               </div>
            </Fade>
         </div>
         <div style={{ color: (darkMode) ? "white" : "black" }}>
            <h3 className="heading3">Technologes worked on</h3>

            <Flip bottom cascade>
               <div className="techs">
                  <img src={jsLogo} style={{ height: '40px', marginTop: '20px' }} />
                  <img src={reactLogo} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
                  <img src={node} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
                  <img src={firebaseLogo} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
                  <img src={mongodbLogo} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
                  <img src={pythonLogo} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
                  <img src={d3Logo} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
                  <img src={sqlLogo} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
                  <img src={opencvLogo} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
                  <img src={npLogo} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
                  <img src={djangoLogo} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
                  <img src={restFrameworkLogo} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
                  <img src={reactnativeLogo} style={{ height: '40px', marginLeft: '40px', marginTop: '20px' }} />
               </div>
            </Flip>

         </div>
      </Element>
   )
}