import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {

    return (
        <Navbar>
            <Container>
                <Nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/Exercises" className="nav-link">Exercises</Link>
                </Nav>
            </Container>
        </Navbar>
        );
};

export default NavigationBar;
