import React from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Header from "../../Shared/Header/Header";
import "./Register.css";

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
        <>
            <Header></Header>
            <div className="register-style">
                <Container className="py-4">
                    <div className="box-shadows">
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="mx-auto text-center">
                                    {!loading && (
                                        <div className="p-3 mb-5 bg-body ">
                                            <form
                                                onSubmit={handleSubmit(
                                                    onSubmit
                                                )}
                                            >
                                                <h2 className="fw-bold">
                                                    REGISTER
                                                </h2>
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
                                                    {...register(
                                                        "confPassword"
                                                    )}
                                                    required
                                                />
                                                <input
                                                    className="mb-3 px-5 submit-form"
                                                    type="submit"
                                                    value="Register"
                                                />
                                            </form>
                                            <p className="mt-1">
                                                Already Registered?
                                                <Link
                                                    to="/login"
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    &nbsp;Please Login
                                                </Link>
                                            </p>
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

export default Register;
