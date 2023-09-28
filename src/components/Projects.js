import { Nav, Container, Row, Col, Tab } from "react-bootstrap";
import { useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img1.png"
import projImg2 from "../assets/images/project-img2.png"
import projImg3 from "../assets/images/project-img3.png"
import projToDo from "../assets/images/project-todolist.png"
import projPaintTreble from "../assets/images/project-painttreble.png"
import projGekkoBot from "../assets/images/project-gekkobot.png"
import projIncoming from "../assets/images/project-incoming.png"
import projOurVoice from "../assets/images/project-ourvoice.png"
import projCarShowcase from "../assets/images/project-carshowcase.png"
import projVendingMachine from "../assets/images/project-vendingmachine.png"
import projCurrencyExchange from "../assets/images/project-currencyexchange.png"
import colorSharp2 from "../assets/images/color-sharp2.png"
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Project = ({isVisible, setActiveLink}) => {
  const soloProjects = [
    {
        title: "Incoming",
        description: "Java Game",
        imgUrl: projIncoming,
        link: "https://github.com/ConnorSapphire/INCOMING"
    },
    // {
    //     title: "Lawnlayer",
    //     description: "Java Game",
    //     imgUrl: projImg2,
    //     link: ""
    // },
    // {
    //     title: "Infurior",
    //     description: "Python Game",
    //     imgUrl: projImg3,
    //     link: ""
    // },
    {
        title: "Gekko Bot",
        description: "Python Discord API",
        imgUrl: projGekkoBot,
        link: "https://github.com/ConnorSapphire/gekko-bot"
    },
    {
        title: "To Do List",
        description: "React Application",
        imgUrl: projToDo,
        link: "https://github.com/ConnorSapphire/Todo-Task-Manager"
    },
  ];

  const teamProjects = [
    {
        title: "Paint Treble",
        description: "Python Game",
        imgUrl: projPaintTreble,
        link: "https://github.com/ConnorSapphire/GDSC_Gamejam_30-09-22"
    },
    {
        title: "Vending Machine",
        description: "Java Terminal Application",
        imgUrl: projVendingMachine,
        link: "https://github.com/ConnorSapphire/VendingMachine-SOFT2412-A2"
    },
    {
        title: "Currency Exchange",
        description: "Java Terminal Application",
        imgUrl: projCurrencyExchange,
        link: "https://github.com/ConnorSapphire/CurrencyExchange-SOFT2412-A1"
    },
  ];

  const inProgress = [
    {
        title: "OurVoice",
        description: "Web Development With Industry Partner",
        imgUrl: projOurVoice,
        link: "https://stg.itsourvoice.com/"
    },
    {
        title: "Car Showcase",
        description: "React Site",
        imgUrl: projCarShowcase,
        link: "https://github.com/ConnorSapphire/car-showcase-website"
    },
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
                            <p>The fantastic projects I have been able to contribute to!</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Solo Projects</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Team Projects</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">In Progress</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                soloProjects.map((project, index) => {
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
                                    <Tab.Pane eventKey="second">
                                    <Row>
                                            {
                                                teamProjects.map((project, index) => {
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
                                    <Tab.Pane eventKey="third">
                                    <Row>
                                            {
                                                inProgress.map((project, index) => {
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