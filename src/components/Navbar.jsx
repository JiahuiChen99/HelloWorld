import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import CV from "../Assets/Jiahui Chen CV.pdf";

function NavBar() {

    return (
        <Navbar expand="md" fixed="top" className="navbar" variant="dark">
            <Container>
                <Navbar.Brand href="/">Jiahui</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/whoami">Whoami</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href={ CV } >Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;