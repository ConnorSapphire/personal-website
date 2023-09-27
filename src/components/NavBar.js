import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const NavBar = ({activeLink, setActiveLink}) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });

    const updateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggle-icon">

                </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link 
                  href="#home" 
                  className={activeLink === "home" ? "active-navbar-link" : "navbar-link"}
                  onClick={()=> updateActiveLink('home')}>
                    Home
                </Nav.Link>
                <Nav.Link 
                  href="#skills" 
                  className={activeLink === "skills" ? "active-navbar-link" : "navbar-link"}
                  onClick={()=> updateActiveLink('skills')}>
                    Skills
                </Nav.Link>
                <Nav.Link 
                  href="#projects" 
                  className={activeLink === "projects" ? "active-navbar-link" : "navbar-link"}
                  onClick={()=> updateActiveLink('projects')}>
                    Projects
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href={process.env.REACT_APP_LINKED_IN} target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Linked In Icon"/></a>
                    <a href={process.env.REACT_APP_FACEBOOK} target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook Icon"/></a>
                    <a href={process.env.REACT_APP_INSTAGRAM} target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram Icon"/></a>
                </div>
                <button className="vvd" onClick={()=>{window.location.href="#contact"; updateActiveLink("");}}>
                    <span>Let's Connect</span>
                </button>
            </span>

          </Container>
        </Navbar>
    );
}