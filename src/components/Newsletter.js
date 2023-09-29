import { Col, Row, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (status === "success") {
            clearFields();
        }
    }, status);

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    };

    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col xs={12} sm={12} md={6} xl={5}>
                        <h3>Subscribe to my Newsletter</h3>
                        {status === "sending" && <Alert>Sending....</Alert>}
                        {status === "error" && <Alert variant="danger">{message}</Alert>}
                        {status === "success" && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <Row className="new-email-bx">
                                <Col xs={12} sm={12} md={6} xl={7}>
                                    <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                </Col>
                                <Col xs={12} sm={12} md={6} xl={5}>
                                    <button type="submit">Submit</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};