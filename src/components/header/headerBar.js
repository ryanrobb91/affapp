import logo from '../../assets/logo.png';
import Navbar from "react-bootstrap/Navbar";


function HeaderBar() {
    return (
        <Navbar fixed="top" className="App-header" expand="lg">
            <img src={logo}  alt="Logo" />
            <Navbar.Text className="justify-content-end">Call us at: <a href="tel:+1-513-214-7818">(513) 214-7818</a></Navbar.Text>
        </Navbar>
    );
}

export default HeaderBar;