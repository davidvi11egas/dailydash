import React from "react";
import "./Navbar.css";
import { Container, Nav, NavDropdown, NavbarBrand, Navbar } from "react-bootstrap";

const NavBar = () => (
<Navbar bg="primary" expand="lg" variant="dark" className="p-1">
  {/* <Container> */}
    <Navbar.Brand href="/">DailyDash</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Nav.Link href="/">Home</Nav.Link> */}
        {/* <Nav.Link href="/experience">Link 1</Nav.Link> */}
        <NavDropdown title="Tools" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  {/* </Container> */}
</Navbar>
);
export default NavBar;