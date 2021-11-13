import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./About.css";

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="about-style">
                <h1>About Drone</h1>
            </div>
            <div className="for-about-back">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div>
                                <h2>Who we are</h2>
                                <h6>
                                    Port Jackson shark. Beluga sturgeon handfish
                                    needlefish titan triggerfish, powen dorado
                                    porbeagle shark Blind shark.
                                </h6>
                                <p>
                                    Wels catfish, boarfish titan triggerfish
                                    orangestriped triggerfish dwarf gourami
                                    sweeper yellow weaver. Mustache triggerfish.
                                    Menhaden temperate ocean-bass North American
                                    darter scythe butterfish. Luminous hake,
                                    Indian mul pike Siamese fighting fish,
                                    weeverfish gulper, flagtail. Sargassum fish
                                    lenok Blind shark arowana Pacific saury
                                    mudsucker.
                                </p>
                                <p>
                                    Blue gourami trout cod Black angelfish bass
                                    knifefish brook lamprey. Grunt sleeper Black
                                    mackerel harelip sucker snook.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <img
                                className="img-fluid"
                                src="https://i.ibb.co/Zc91FrH/videoblocks-interchange-highway-road-network-aerial-landscape-road-crossing-aerial-view-road-junctio.png"
                                alt=""
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
