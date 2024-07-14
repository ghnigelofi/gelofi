import './App.css';
import About from './sections/About/About';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Hero/Projects/Projects';
import Skills from './sections/Hero/Skills/Skills';
import sidebarStyles from './common/Sidebar.module.css';

// listener
import { useState } from 'react';

function App() {

  // click listener
  const [ Intro, showIntro ] = useState(true);
  const handleClick = () => showIntro((Intro) => !Intro)

  const noSidebar = window.matchMedia('(max-width: 768px').matches;
  if(noSidebar){
    // no sidebar (MOBILE)
    return <>
      <Hero/>
      <Projects/>
      <Skills/>
    </>
  } else {
    // WITH SIDEBAR (DESKTOP)
    return <>
      <div className={sidebarStyles.sidenav}>
              <button onClick={handleClick}><a href="#main">Intro</a></button>
              <button><a href="#projects">Projects</a></button>
              <button><a href="#skills">Skills</a></button>
              <button><a href="designs">Designs</a></button>
          </div>
      {Intro ? <Hero/> : <About/>}
      <Projects/>
      <Skills/>
      </>
  }
}

// this is the HOMEPAGE

export default App;