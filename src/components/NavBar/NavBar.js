import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './NavBar.css'

const NavBar = () => {
    // getting user from useAuth
    const { user, logout } = useAuth();

    const userName = user.displayName;
    console.log(userName);

    return (
        <>
            <Navbar sticky="top" className="navBar navBg" expand="lg">
            <Container fluid>
            <Navbar.Brand className="text-white"> Shuvro Baset </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Link className="nav-item" to="/home">Home</Link>
                    <Link className="nav-item" to="/all-blogs">Blogs</Link>
                    <Link className="nav-item" to="/about">About</Link>
                </Nav>
                <Nav className="mr-auto">
                {/* showing logout login button and user name  */}
                    { !user?.email && 
                        <NavLink className="nav-item" to="/login"> <i className="fas fa-sign-in-alt"></i> Login</NavLink>
                    }
                    { userName==='admin' &&
                        <NavLink className="nav-item" to="/dashboard">  Dashboard</NavLink>
                    }
                    { user?.email &&
                        <small className="nav-item"><i className="fas fa-user"></i> {user.displayName.slice(0,7) || user.name} </small>
                    }
                    { user?.email &&
                        <NavLink className="nav-item" onClick={logout} to="/home"><i className="fas fa-sign-out-alt"></i> LogOut</NavLink>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default NavBar;