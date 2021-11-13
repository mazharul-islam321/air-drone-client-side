import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Products.css";

const Products = () => {
    const { loading, setLoading } = useAuth();
    const [drones, setDrones] = useState([]);

    useEffect(() => {
        const uri = "http://localhost:4000/products";
        fetch(uri)
            .then((res) => res.json())
            .then((data) => {
                setDrones(data);
                setLoading(false);
            });
    }, [setLoading]);
    if (loading) {
        return (
            <div className="text-center spiner-style">
                <Spinner animation="grow" variant="danger" />
            </div>
        );
    }
    // setIsLoading
    return (
        <div className="products-style">
            <h1 className="text-center">Your Favourite Drone</h1>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {drones.slice(0, 6).map((drone) => (
                        <Col key={drone._id}>
                            <Card className="products-card-style">
                                <Card.Img
                                    variant="top"
                                    src={drone.img}
                                    className="products-card-img"
                                />
                                <Card.Body>
                                    <Card.Title className="products-card-title">
                                        {drone.name}
                                    </Card.Title>
                                    <Card.Text className="products-card-para">
                                        {drone.description?.slice(0, 70)}...
                                    </Card.Text>
                                    <Card.Text className="products-card-para">
                                        ${drone.price}
                                    </Card.Text>
                                    <Link to={`/placeorder/${drone._id}`}>
                                        <button className="products-card-button">
                                            Order Now
                                        </button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;
