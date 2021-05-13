import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function OurStory() {
    return (
        <Container className="OurStory">
            <Row>
                <Col xs={12}>
                    <h1>Our Story</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <img></img>
                </Col>
                <Col sm={12} md={6}>
                    <p>Toby Baker have been doing repairs for 10+ years as a certified repair technician</p>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <img></img>
                </Col>
                <Col sm={12, { order: 'last' }} md={6, { order: 'first' }}>
                    <p>Each service technician has at least 5 years of experience with servicing washers and dryers </p>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <img></img>
                </Col>
                <Col sm={12} md={6}>
                    <p>Started the company in 2020 to provide affordable repair services for people in his community</p>
                </Col>
            </Row>
        </Container>
    );
}

export default OurStory;