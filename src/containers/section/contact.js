import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
    return (
        <Container className="Contact">
            <Row>
                <Col xs={12}>
                    <h1>Contact Us!</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <img></img>
                    <h3>Phone Number:</h3>
                    <a href="tel:+1-513-214-7818">(513) 214-7818</a>
                </Col>
                <Col sm={12} md={6}>
                    <img></img>
                    <h3>Email:</h3>
                    <a href={"mailto:Tobydbaker1@gmail.com?subject=Lets Talk Business!&body=Hello, I want to talk to you about the services you offer"} target="_blank">Tobydbaker1@gmail.com</a>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;