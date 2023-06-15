import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import "../../styles/Header.module.css";

const Header = () => {
  return (
    <Navbar className="header" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo.src} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link href="#features">Pursue</Link>
            <Link href="#pricing">For Nannies</Link>
            <Link href="#pricing">For Parents</Link>
          </Nav>
          <Nav className="button-navbar">
            <Form.Select
              aria-label="Default select example"
              className="language-dropdown"
            >
              <option value="eng">ENG</option>
              <option value="1">One</option>
            </Form.Select>
            <Link className="login-btn" href="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
