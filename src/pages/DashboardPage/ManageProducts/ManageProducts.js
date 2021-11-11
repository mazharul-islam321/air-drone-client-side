import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ManageProducts = () => {
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
    // console.log(drones);

    const handleDelete = (id) => {
        const proceed = window.confirm(
            "are you sure, you want to Cancle your Order!!!!!!"
        );
        if (proceed) {
            fetch(`http://localhost:4000/products/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remainingDrone = drones?.filter(
                            (drone) => drone._id !== id
                        );
                        setDrones(remainingDrone);
                    }
                });
        }
    };
    return (
        <div>
            <h2>this is manage products page</h2>
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
                                        {drone.description}...
                                    </Card.Text>
                                    <Card.Text className="card-para">
                                        ${drone.price}
                                    </Card.Text>

                                    <button
                                        onClick={() => handleDelete(drone?._id)}
                                        className="card-button"
                                    >
                                        delete
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ManageProducts;
