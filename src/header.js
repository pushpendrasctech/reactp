import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" >
        <Container>
          <Navbar.Brand href="#home"> 
             <img src={require('./images/logo.png')} />
             </Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
          <Nav className="mx-auto">
            <Nav.Link href="/"><i class="fas fa-home"></i>Home</Nav.Link>
            <Nav.Link href="about"><i class="fad fa-info-square"></i> About </Nav.Link>
            <Nav.Link href="contact"> <i class="fas fa-address-book"></i> Contact</Nav.Link>
          </Nav>
          <Nav>
          <Button className="btn regist-ubutton">Register</Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
}
export default Header;