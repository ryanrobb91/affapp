import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "../../components/general/icons/icon";
import WasherIcon from "../../components/general/icons/washerIcon";
import IconLib from "../../components/general/icons/iconsLib";

function OutlineOfServices() {
    return (
        <Container fluid className="OutlineOfServices BodyContainer ColoredRow">
            <Row className="RowDefault">
                <Col sm={12} md={6}>
                    <Row>
                        <Col md={12} lg={{span: 2, offset: 1}} style={{textAlign: 'center', paddingBottom: '1rem'}}>
                            <Icon size="128" viewBox="0 0 24 24" icon={IconLib.repair}/>
                        </Col>
                        <Col md={12} lg={9} style={{paddingLeft: '4rem'}}>
                            <h1>Washer Repair:</h1>
                            <p>$69.99 Inspection Fee, Waived if We Do the Work for You</p>
                            <p>$100 Service Fee, No Markup on Parts</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6}>
                    <Row>
                        <Col md={12} lg={{span: 2, offset: 1}} style={{textAlign: 'center', paddingBottom: '1rem'}}>
                            <WasherIcon size="128" viewBox="0 0 512 512"/>
                        </Col>
                        <Col md={12} lg={9} style={{paddingLeft: '4rem'}}>
                            <h1>Buy New Washers/Dryers:</h1>
                            <p>Free Pickup of Old Washer/Dryer</p>
                            <p>Free Delivery of New Washer/Dryer</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default OutlineOfServices;