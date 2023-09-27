import './App.css';
import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Skills } from './Skills';
import { Project } from './Projects';
import { Footer } from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './Contact';
import TrackVisibility from 'react-on-screen';
import { useCallback, useState } from 'react';

function App() {
  const [activeLink, setActiveLink] = useState("home");

  const updateActiveLink = useCallback((link) => {
    setActiveLink(link)
  }, [activeLink]);


  return (
    <div className="App">
      <NavBar
        activeLink={activeLink}
        setActiveLink={updateActiveLink}
      />
      <TrackVisibility partialVisibility offset={-250}>
        {({isVisible}) => (
          <Banner isVisible={isVisible} setActiveLink={updateActiveLink}/>
        )}
      </TrackVisibility>
      <TrackVisibility partialVisibility>
        {({isVisible}) => (
          <Skills isVisible={isVisible} setActiveLink={updateActiveLink}/>
        )}
      </TrackVisibility>
      <TrackVisibility partialVisibility offset={-250}>
        {({isVisible}) => (
          <Project isVisible={isVisible} setActiveLink={updateActiveLink}/>
        )}
      </TrackVisibility>
      <TrackVisibility partialVisibility>
        {({isVisible}) => (
          <Contact isVisible={isVisible} setActiveLink={updateActiveLink}/>
        )}
      </TrackVisibility>
      <TrackVisibility partialVisibility>
        {({isVisible}) => (
          <Footer isVisible={isVisible} setActiveLink={updateActiveLink}/>
        )}
      </TrackVisibility>
    </div>
  );
}

export default App;
