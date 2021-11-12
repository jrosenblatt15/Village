import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import vlg from "../images/village.png";

const NavBar = () => {
  const [viewPort, setViewport] = useState(window.innerWidth);

  const updateMedia = () => {
    setViewport(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div className="container-fluid nav__bar">
      <Navbar collapseOnSelect bg="light" expand="lg" className="nav__bar">
        <Container className="nav__cont">
          <div className="mx-auto logo navbar-brand hide-big">
            <a href="https://www.impactvillage.io" className="navbar-brand">
              <img id="logo" src={vlg} alt="logo" />
            </a>
          </div>
          <Navbar.Toggle bg="light" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav__link fix-nav" href="#home">
                <a
                  className="nav-link"
                  href="https://village.gitbook.io/village/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Docs
                </a>
              </Nav.Link>
              <Nav.Link className="nav__link fix-nav" href="#link">
                <a
                  className="nav-link"
                  href="https://village.gitbook.io/village/faqs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FAQs
                </a>
              </Nav.Link>
              <Navbar.Brand href="#home">
                <div className="mx-auto logo navbar-brand hide-small">
                  <a
                    href="https://www.impactvillage.io"
                    className="navbar-brand"
                  >
                    <img id="logo" src={vlg} alt="logo" />
                  </a>
                </div>
              </Navbar.Brand>
              <Nav.Link className="nav__link" href="#home">
                <a
                  className="nav-link fix-nav-bf"
                  href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0"
                  target="_blank"
                  rel="noreferrer"
                >
                  Borrower {viewPort > 1024 ? <br /> : ""} Form
                </a>
              </Nav.Link>
              <Nav.Link className="nav__link" href="#link">
                <a
                  className="nav-link fix-nav-cu fix-nav"
                  href="https://us20.list-manage.com/contact-form?u=12cf845d2866bf06908250683&form_id=547d0fe7541d796319c27137928c693f"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact us
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
