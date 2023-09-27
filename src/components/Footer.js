import { Col, Container, Row } from "react-bootstrap"
import { useEffect } from "react";
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/images/logo.svg"
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const Footer = ({isVisible, setActiveLink}) => {
    useEffect(() => {
        if (isVisible) {
            setActiveLink("");
        }
    }, [isVisible])

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href={process.env.REACT_APP_LINKED_IN} target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Linked In Icon"/></a>
                            <a href={process.env.REACT_APP_FACEBOOK} target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook Icon"/></a>
                            <a href={process.env.REACT_APP_INSTAGRAM} target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram Icon"/></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved by Connor Smith.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};