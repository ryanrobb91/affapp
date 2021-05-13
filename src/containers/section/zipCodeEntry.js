import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function ZipCodeEntry() {
    return (
        <Container className="ZipCodeEntry">
            <Row>
                <Col>
                    <h1>Enter Your Zip Code to See if You’re in Our Service Area</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formZipCode">
                        <Form.Control type="email" placeholder="Zip Code" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" size="lg">
                    Check Zip Code
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ZipCodeEntry;