import { Nav, Container, Row, Col, Tab } from "react-bootstrap";
import { useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img1.png"
import projImg2 from "../assets/images/project-img2.png"
import projImg3 from "../assets/images/project-img3.png"
import colorSharp2 from "../assets/images/color-sharp2.png"
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Project = ({isVisible, setActiveLink}) => {
  const projects = [
    {
        title: "Business Startup",
        description: "Design and Development",
        imgUrl: projImg1
    },
    {
        title: "Business Startup",
        description: "Design and Development",
        imgUrl: projImg2
    },
    {
        title: "Business Startup",
        description: "Design and Development",
        imgUrl: projImg3
    },
    {
        title: "Business Startup",
        description: "Design and Development",
        imgUrl: projImg1
    },
    {
        title: "Business Startup",
        description: "Design and Development",
        imgUrl: projImg2
    },
    {
        title: "Business Startup",
        description: "Design and Development",
        imgUrl: projImg3
    }
  ];

  useEffect(() => {
    if (isVisible) {
        setActiveLink("projects");
    }
  }, [isVisible])
  
  return (
    <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
                    <TrackVisibility partialVisibility>
                    {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInLeft" : ""}>
                            <h2>Projects</h2>
                            <p>The Illustrious Projects I Have Been A Part Of.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">More To Come...</Tab.Pane>
                                    <Tab.Pane eventKey="third">More To Come...</Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}/>
    </section>
  );  
};