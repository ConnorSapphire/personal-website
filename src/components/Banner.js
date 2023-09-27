import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/header-img.svg"
import TrackVisibility from "react-on-screen";
import "animate.css";
import { NavBar } from "./NavBar";

export const Banner = ({isVisible, setActiveLink}) => {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer", "Web Developer", "Student"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let Ticker = setInterval(()=> {
            tick()
        }, delta);

        return () => { clearInterval(Ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(500);
        }
    };

    useEffect(() => {
        if (isVisible) {
            setActiveLink("home");
        }
    }, [isVisible])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility partialVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn animate__slower" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>
                                    {"Hi I'm Connor Smith: "}
                                    <span className="wrap">
                                        {text}
                                    </span>
                                </h1>
                                <p>This will be text about me. Lorem ipsum.</p>
                                <button onClick={() => {window.location.href="#contact"; }}>Let's Connect <ArrowRightCircle size={25}/></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} med={6} xl={5}>
                        <img src={headerImg} alt="Header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}