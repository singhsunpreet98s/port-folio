import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { Element } from 'react-scroll';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import './projects.css';
import { useSelector } from 'react-redux'
import image1 from './images/Capture.JPG';
import image2 from './images/Capture5.JPG';
import image3 from './images/Capture2.JPG';
import image4 from './images/Capture3.JPG';
import image5 from './images/Capture4.JPG';
import image6 from './images/Capture6.JPG';
const imgArr = [
   {
      image: image1,
      link: 'https://fit-bit.netlify.app/',
      title: 'A basic Apple iWatch ShowCase with differnet color and modes. created using Basic Reactjs Click to view'
   }, {
      image: image2,
      link: 'https://github.com/singhsunpreet98s/Flipkart-Clone',
      title: 'A Flipkart like Ecommerce App ,created using Reactjs,redux,react-router-dom,axios and nodejs,express,mongodb amd jsonweb token . not deployed yet click to check github code'
   }, {
      image: image3
      , link: 'https://youthful-turing-23d40b.netlify.app/',
      title: 'Covid 19 world app creaetd for supporting the cause ,created using Reactjs , and d3 Click to view'
   }, {
      image: image4,
      link: 'https://book-cart-js.netlify.app/',
      title: 'Simple book store created using Reactjs ,redux . Backend nodejs,express,mongodb'
   },
   {
      image: image5,
      link: 'https://sunpreet.netlify.app',
      title: 'Its a protfolio that is created using Reactjs and ReactScroll '
   },
   {
      image: image6,
      link: '',
      title: 'A Prime-video look like movie app created using React.js redux react-router-dom for frontend and djnago,mysql and rest_framework for backend '
   },



]

function Projects() {
   const darkMode = useSelector((state) => state.pageMode.darkMode)
   const [currentImg, setCurrentImg] = useState(0);
   const [b, sb] = useState(false);
   const imgArrlen = imgArr.length
   const next = () => {
      (currentImg + 1 === imgArrlen) ? setCurrentImg(0) : setCurrentImg(currentImg + 1)
      sb(!b)
   }
   const prev = () => {
      (currentImg === 0) ? setCurrentImg(imgArrlen - 1) : setCurrentImg(currentImg - 1)
      sb(!b)
   }


   return (
      <Element name="works">

         <div style={{ color: (darkMode) ? "white" : "black" }}>
            <h2 className="head3">Some Projects and works</h2>
         </div>
         <div className="mainCont" >

            <ArrowBackIosIcon className="bck" onClick={() => prev()} />
            <ArrowForwardIosIcon className="fwd" onClick={() => next()} />
            {
               imgArr.map((item, index) => {
                  return (currentImg === index) && <a href={imgArr[index].link} target="_blank" className="reference" ><span className="ImgTitle"><p>{imgArr[index].title}</p></span><img src={imgArr[index].image} key={index} alt={imgArr[index].image} className={(b) ? "mainImage" : 'mainImage2'} /></a>
               })
            }
            <div className="dotsCont">
               {

                  imgArr.map((item, index) => {
                     return <div className="imgSelector" key={index} style={{ backgroundColor: (currentImg === index) ? 'white  ' : 'gray' }} onClick={() => setCurrentImg(index)}></div>
                  })
               }</div>


         </div>


      </Element>
   )
}

export default Projects
