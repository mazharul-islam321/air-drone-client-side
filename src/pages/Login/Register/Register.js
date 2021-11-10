import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleRegiSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("Your password did not match");
            return;
        }
        registerUser(
            loginData.email,
            loginData.password,
            loginData.name,
            history
        );
        e.preventDefault();
    };

    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={6}>
                        <Form
                            className="mx-auto pt-4 pb-5 w-75"
                            onSubmit={handleRegiSubmit}
                        >
                            <h2 className="text-center">REGISTER</h2>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicName"
                            >
                                <Form.Label>NAME</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    placeholder="Your Full Name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email</Form.Label>
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
                                controlId="formBasicPassword"
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
                            {/* <span>{error || regiError}</span> */}
                            <Form.Group
                                className="mb-3"
                                controlId="formPassword"
                            >
                                <Form.Label>CONFIRM PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="confpassword"
                                    placeholder="............"
                                    onBlur={handleOnBlur}
                                    required
                                />
                            </Form.Group>
                            <div className="d-grid gap-2 my-4">
                                <Button variant="secondary" type="submit">
                                    Create Account
                                </Button>
                            </div>
                            <div className="">
                                <span>already have an account?</span>
                                <Link to="/login"> signin</Link>
                            </div>
                        </Form>
                    </Col>
                    <Col xs={12} md={6} className="mb-5">
                        <h1 className="text-center fw-bold">AIR DRONE</h1>
                        {/* <img
                            className="authimg"
                            src="https://i.ibb.co/k6GXFhx/logo.png"
                            alt=""
                        /> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
