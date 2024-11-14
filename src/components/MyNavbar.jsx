import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";  
import Button from "react-bootstrap/Button";
import '../App.css';

export default function MyNavbar() {
    return(
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Text href="#home" className="font">아주대학교 중앙 IT 네트워킹 동아리</Navbar.Text>
          <Navbar.Collapse className="justify-content-end font">
            <Nav.Link href="#myaccount" className="ms-3">MY ACCOUNT</Nav.Link>
            <Nav.Link href="#mypage" className="ms-3">MY PAGE</Nav.Link>
            <Button variant="secondary" className="ms-3" size="sm" style={{ backgroundColor: `#E3E3E3`, borderColor: `#E3E3E3`}}><span className="font" style={{ color: "black" }}>SIGN IN</span></Button>
            <Button variant="dark" className="ms-3" size="sm"><span className="font">SIGN UP</span></Button>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    );
};