import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function OutlineOfServices() {
    return (
        <Container className="OutlineOfServices">
            <Row>
                <Col sm={12} md={6}>
                    <h1>Washer Repair:</h1>
                    <p>$69.99 Inspection Fee, Waived if We Do the Work for You</p>
                    <p>$100 Service Fee, No Markup on Parts</p>
                </Col>
                <Col sm={12} md={6}>
                    <h1>Buy New Washers/Dryers:</h1>
                    <p>Free Pickup of Old Washer/Dryer</p>
                    <p>Free Delivery of New Washer/Dryer</p>
                </Col>
            </Row>
        </Container>
    );
}

export default OutlineOfServices;