import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import "../../styles/Header.module.css";

const Header = () => {
  return (
    <Navbar className="header" collapseOnSelect expand="lg">
      <Container>
        <Link href="/">
          <Navbar.Brand>
            <img src={logo.src} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <div className="parent">
              <Link href="#features">Pursue</Link>
              <div className="child">
                <Link href="/whoWeAre">Who we are</Link>
                <Link href="/blogs">Blog</Link>
                <Link href="/feedback">Feedback</Link>
              </div>
            </div>
            <div className="parent">
              <Link href="#pricing">For Nannies</Link>
              <div className="child">
                <Link href="/guidance"> Guidance child caregiver</Link>
                <Link href="/ChildrenProviderFaq">FAQ</Link>
              </div>
            </div>
            <div className="parent">
              <Link href="#pricing">For Parents</Link>
              <div className="child">
                <Link href="/instructions"> Instructions</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/child-care"> Search for child care</Link>
              </div>
            </div>
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
