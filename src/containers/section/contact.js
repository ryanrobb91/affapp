import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "../../components/general/icons/icon";
import IconLib from "../../components/general/icons/iconsLib";

function Contact() {
    return (
        <Container fluid className="Contact BodyContainer ColoredRow">
            <Row>
                <h1>Contact Us!</h1>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <Row>
                        <Col md={{span: 2, offset: 2 }} className="centerAlign">
                            <Icon size="6" viewBox="0 0 24 24" icon={IconLib.phone} className="centerAlign"/>
                        </Col>
                        <Col md={{span: 8}}>
                            <h3>Phone Number:</h3>
                            <a href="tel:+1-513-464-3959">(513) 464-3959</a>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6}>
                    <Row>
                        <Col md={{span: 2, offset: 2 }} className="centerAlign">
                            <Icon size="6" viewBox="0 0 24 24" icon={IconLib.email}/>
                        </Col>
                        <Col md={{span: 8}}>
                            <h3>Email:</h3>
                            <a href={"mailto:Tobydbaker1@gmail.com?subject=Lets Talk Business!"} target="_blank">Tobydbaker1@gmail.com</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;