import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        AIR DRONE
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="#">
                                explore
                            </Nav.Link>
                            {user?.email && (
                                <Nav.Link as={Link} to="#">
                                    Dashboard
                                </Nav.Link>
                            )}
                            <Nav.Link as={Link} to="#">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="#">
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {user?.email ? (
                                <span>
                                    <span className="username">
                                        {user?.displayName}
                                    </span>
                                    <span className=" logout" onClick={logOut}>
                                        Log Out
                                    </span>
                                </span>
                            ) : (
                                <>
                                    <Nav.Link
                                        as={Link}
                                        to="/login"
                                        className="fs-5"
                                    >
                                        Log in
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        to="/register"
                                        className="fs-5"
                                    >
                                        Sign Up
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
