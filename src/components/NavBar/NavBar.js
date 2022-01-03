import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar sticky="top" className="navBar navBg" expand="lg">
            <Container fluid>
            <Navbar.Brand> Shuvro Baset </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Link className="menu-item" to="/home">Home</Link>
                    <Link className="menu-item" to="/add-blog">Add Blog</Link>
                    <Link className="menu-item" to="/all-blogs">Blogs</Link>
                    <Link className="menu-item" to="/about-me">About</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default NavBar;