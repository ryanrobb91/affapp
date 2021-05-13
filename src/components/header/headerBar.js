import logo from '../../logo.png';
import Navbar from "react-bootstrap/Navbar";


function HeaderBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><img src={logo}  alt="Logo" /></Navbar.Brand>
            <Navbar.Text>Call us at: <a href="tel:+1-513-214-7818">(513) 214-7818</a></Navbar.Text>
        </Navbar>
    );
}

export default HeaderBar;