import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import useAuth from "../../../hooks/useAuth";
import { Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import "./Login.css";

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
        <>
            <Header></Header>
            <div className="login-style">
                <Container className="py-4">
                    <div className="box-shadows">
                        <Row>
                            <Col xs={12} md={6}>
                                <Form
                                    className="mx-auto pt-4 pb-4 w-75"
                                    onSubmit={handleLoginSubmit}
                                >
                                    <h2 className="text-center fw-bold">
                                        LOG IN
                                    </h2>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            onBlur={handleOnBlur}
                                            placeholder="Your Email"
                                            required
                                            className="login-input"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="BasicPassword"
                                    >
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            onBlur={handleOnBlur}
                                            placeholder="Your Pass"
                                            required
                                            className="login-input"
                                        />
                                    </Form.Group>
                                    {/* <span>{logInError}</span> */}
                                    <div className="d-grid gap-2 my-4 login-input">
                                        <Button
                                            variant="secondary"
                                            type="submit"
                                            className="submit-forms"
                                        >
                                            Sign In
                                        </Button>
                                    </div>
                                    <p className="text-center">
                                        New User?
                                        <Link
                                            to="/register"
                                            style={{ textDecoration: "none" }}
                                        >
                                            &nbsp;Please Register
                                        </Link>
                                    </p>
                                </Form>
                                <div className="google-btn">
                                    <button onClick={handleGoogleSignIn}>
                                        Google Log in
                                    </button>
                                </div>

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
                                <h2 className="fw-bold">AIR DRONE</h2>
                                <img
                                    className="img-fluid"
                                    src="https://i.ibb.co/fGJndw8/e3dd9948fa25737a832e1688c0571484.png"
                                    alt=""
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Login;
