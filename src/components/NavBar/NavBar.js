import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar sticky="top" className="navBar navBg" expand="lg">
            <Container fluid>
            <Navbar.Brand className="text-white"> Shuvro Baset </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Link className="nav-item" to="/home">Home</Link>
                    <Link className="nav-item" to="/add-blog">Add Blog</Link>
                    <Link className="nav-item" to="/all-blogs">Blogs</Link>
                    <Link className="nav-item" to="/about">About</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default NavBar;