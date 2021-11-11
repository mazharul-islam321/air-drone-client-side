import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
    // const { setIsLoading } = useAuth();
    const [drones, setDrones] = useState([]);

    useEffect(() => {
        const uri = "http://localhost:4000/products";
        fetch(uri)
            .then((res) => res.json())
            .then((data) => {
                // setIsLoading(false);
                setDrones(data);
            });
    }, []);
    // setIsLoading
    return (
        <div>
            <h2>this is drone page</h2>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {drones.map((drone) => (
                        <Col key={drone._id}>
                            <Card className="card-style">
                                <Card.Img
                                    variant="top"
                                    src={drone.img}
                                    className="card-img"
                                />
                                <Card.Body>
                                    <Card.Title className="card-title">
                                        {drone.name}
                                    </Card.Title>
                                    <Card.Text className="card-para">
                                        {drone.description.slice(0, 80)}...
                                    </Card.Text>
                                    <Card.Text className="card-para">
                                        ${drone.price}
                                    </Card.Text>
                                    <Link to={`/placeorder/${drone._id}`}>
                                        <button className="card-button">
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
