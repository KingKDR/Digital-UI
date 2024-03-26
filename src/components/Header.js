import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/pk.png'
import "../components/Header.css";

const Header = () => {
  const headstyle = {
    height: "10vh", 
    backgroundColor: "#000", 
    color: "white", 
   };
 return (
  <header style={headstyle}>
  <Navbar key={'sm'} expand={'sm'} className="navb bg-transparent mb-3 " >
  <Container fluid >
    <Navbar.Brand href="/"><img src={logo} width={'100rem'} style={{paddingTop:"0em"}} alt='logo'/></Navbar.Brand>
    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
    <Navbar.Offcanvas 
      id={`offcanvasNavbar-expand-${'sm'}`}
      aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
          Parkar Digital
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">Products</Nav.Link>
          <Nav.Link href="/about">Services</Nav.Link>
          <NavDropdown
        id="nav-dropdown-dark-example"
        title="About"
        menuVariant="dark"
        className="custom-dropdown"
      >
        <NavDropdown.Item href="/about">Management</NavDropdown.Item>
        <NavDropdown.Item href="/data">Support</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
        <NavDropdown.Item href="/search">Search</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#action2">Contact</Nav.Link>
      </Nav>          
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  </header>
  
 );
}

 


export default Header;
