import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import useAuth from "../../../hooks/useAuth";
import { Col, Container, Form, Row } from "react-bootstrap";

const Login = () => {
    const { handleUserLogin, signInWithGoogle } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        handleUserLogin(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h2>Log In</h2>
                        <Form
                            className="mx-auto pt-4 pb-5 w-75"
                            onSubmit={handleLoginSubmit}
                        >
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    placeholder="Email Address"
                                    required
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="BasicPassword"
                            >
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    placeholder="..........."
                                    required
                                />
                            </Form.Group>
                            {/* <span>{logInError}</span> */}
                            <div className="d-grid gap-2 my-4">
                                <Button variant="secondary" type="submit">
                                    Sign In
                                </Button>
                            </div>
                            <NavLink
                                style={{ textDecoration: "none" }}
                                to="/register"
                            >
                                <Button variant="text">
                                    New User? Please Register
                                </Button>
                            </NavLink>
                            {/* <div>
                                <span>Don't have an account?</span>
                                <Link to="/signup"> Sign Up</Link>
                            </div> */}
                        </Form>
                        <button onClick={handleGoogleSignIn}>
                            Google Sign in
                        </button>
                        {/* <NavLink
                            style={{ textDecoration: "none" }}
                            to="/register"
                        >
                            <Button variant="text">
                                New User? Please Register
                            </Button>
                        </NavLink> */}
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>AIR DRONE</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
