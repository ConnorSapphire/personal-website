import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter95 from "../assets/images/meter-95.svg"
import meter90 from "../assets/images/meter-90.svg"
import meter80 from "../assets/images/meter-80.svg"
import meter70 from "../assets/images/meter-70.svg"
import meter60 from "../assets/images/meter-60.svg"
import meter50 from "../assets/images/meter-50.svg"
import colorSharp from "../assets/images/color-sharp.png"
import { useEffect } from "react";

export const Skills = ({isVisible, setActiveLink}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    }

    useEffect(() => {
        if (isVisible) {
            setActiveLink("skills");
        }
    }, [isVisible])

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>The skills I currently have.<br></br>With more always in development.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter80} alt="80% Meter"/>
                                    <h5>Software Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter70} alt="70% Meter"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter80} alt="80% Meter"/>
                                    <h5>Java Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter80} alt="80% Meter"/>
                                    <h5>Python Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter50} alt="50% Meter"/>
                                    <h5>C Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter60} alt="60% Meter"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter70} alt="70% Meter"/>
                                    <h5>HTML Language</h5>
                                </div>
                                <div className="item">
                                    <img src={meter50} alt="50% Meter"/>
                                    <h5>CSS Language</h5>
                                </div>
                                <div className="item">
                                    <img src={meter70} alt="70% Meter"/>
                                    <h5>JavaScript Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter95} alt="95% Meter"/>
                                    <h5>Agile Programming</h5>
                                </div>
                                <div className="item">
                                    <img src={meter90} alt="90% Meter"/>
                                    <h5>Team Programming With Git</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    );
};