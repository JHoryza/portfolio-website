import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation() {
    return (
        <Navbar className="navbar" bg="dark" variant="dark" sticky="top">
            <Nav className="justify-content-center" style={{ width: "100%" }}>
                <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                <Nav.Link className="nav-link" href="#projects">Projects</Nav.Link>
                <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation