import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ZipCodeEntry() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid className="ZipCodeEntry">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>We Deliver!</Modal.Title>
                </Modal.Header>
                <Modal.Body>We will deliver for free within 25 miles. Delivery starts at $29.99 over 25 miles</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row>
                <Col xs={{span: 10, offset: 1}} sm={{span: 6, offset: 3}}>
                    <h1>Enter Your Zip Code to See if You’re in Our Service Area</h1>
                </Col>
            </Row>
            <Row style={{flexDirection: 'column'}}>
                <Form.Group controlId="formZipCode" style={{alignSelf: 'center'}}>
                    <Form.Control type="email" placeholder="Zip Code" />
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" size="lg" onClick={handleShow}>
                    Check Zip Code
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ZipCodeEntry;