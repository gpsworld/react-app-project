import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles.css';


const TransparentNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="/">My Restaurant</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/menu">Menu</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TransparentNavbar;
