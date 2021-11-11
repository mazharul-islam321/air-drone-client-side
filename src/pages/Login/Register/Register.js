import React from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const { error, user, loading, handleUserRegister } = useAuth();
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if (data.password !== data.confPassword) {
            alert("Your password did not match");
            return;
        }
        handleUserRegister(data.email, data.password, data.name, history);
        // console.log(data);
    };

    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col xs={12} md={6}>
                        <div>
                            <div className="mx-auto text-center">
                                {!loading && (
                                    <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                                        <p>
                                            Already Registered?
                                            <Link to="/login">
                                                Please Login
                                            </Link>
                                        </p>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input
                                                className="p-2 mb-2 form-control"
                                                type="text"
                                                placeholder="Your Name"
                                                {...register("name")}
                                                required
                                            />
                                            <input
                                                className="p-2 mb-2 form-control"
                                                type="email"
                                                placeholder="Your Email"
                                                {...register("email")}
                                                required
                                            />
                                            <input
                                                className="p-2 mb-3 form-control"
                                                type="password"
                                                placeholder="Type Password"
                                                {...register("password")}
                                                required
                                            />
                                            <input
                                                className="p-2 mb-3 form-control"
                                                type="password"
                                                placeholder="ReType Password"
                                                {...register("confPassword")}
                                                required
                                            />
                                            <input
                                                className="btn mb-3 btn-success px-5"
                                                type="submit"
                                                value="Register"
                                            />
                                        </form>
                                        {error && (
                                            <Alert variant="danger">
                                                {error}
                                            </Alert>
                                        )}
                                    </div>
                                )}
                                {loading && (
                                    <Spinner
                                        animation="border"
                                        variant="info"
                                    />
                                )}
                                {user?.email && (
                                    <Alert variant="success">
                                        Registration Successful
                                    </Alert>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className="text-center fw-bold">AIR DRONE</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
