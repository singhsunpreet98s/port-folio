import React, { Suspense, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import { setDarkMode } from './redux/allActions'
import { useSelector, useDispatch } from 'react-redux';
const Navbar = React.lazy(() => import('./components/navbar'))
const About = React.lazy(() => import('./components/about'))
const Projects = React.lazy(() => import('./components/projects'))
const Contact = React.lazy(() => import('./components/contact'))
function App() {
  const darkMode = useSelector((state) => state.pageMode.darkMode)
  const dispatch = useDispatch();
  useEffect(() => {

    if (localStorage.getItem("darkMode") === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem("darkMode", true)
        dispatch({ type: setDarkMode, payload: true })
      }
      else {
        localStorage.setItem("darkMode", false)
        dispatch({ type: setDarkMode, payload: false })
      }

    }
    else {
      if (localStorage.getItem("darkMode") === "true") {
        dispatch({ type: setDarkMode, payload: true })
      }
      else {
        dispatch({ type: setDarkMode, payload: false })
      }
    }


  }, [])
  return (

    <div style={{ backgroundColor: (darkMode) ? '#232F34' : "white" }}>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </div>




  );
}

export default App;
