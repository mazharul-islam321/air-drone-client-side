import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutDrone.css";

const AboutDrone = () => {
    return (
        <div className="about-deone">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img
                            className="img-fluid"
                            src="https://i.ibb.co/fCq9YKJ/490930-Product-0-I-637405184536932353-1080x.jpg"
                            alt=""
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="drone-info">
                            <h1>
                                Specializing in Drone Services, and Aerial
                                Photography
                            </h1>
                            <p>
                                Drones are more formally known as unmanned
                                aerial vehicles (UAVs) or unmanned aircraft
                                systems (UASes). Essentially, a drone is a
                                flying robot that can be remotely controlled or
                                fly autonomously through software-controlled
                                flight plans in their embedded systems, working
                                in conjunction with onboard sensors and GPS.
                            </p>
                            <h3>- Mobile Device Supported.</h3>
                            <h3>- Easy integrative control.</h3>
                            <h3>- Customized Commands.</h3>
                            <button>Learn More...</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutDrone;
