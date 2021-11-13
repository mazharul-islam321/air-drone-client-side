import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ManageProducts = () => {
    const [drones, setDrones] = useState([]);
    useEffect(() => {
        const uri = "https://salty-shore-04122.herokuapp.com/products";
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
            "are you sure, you want to delete your product!!!"
        );
        if (proceed) {
            fetch(`https://salty-shore-04122.herokuapp.com/products/${id}`, {
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
        <div className="products-style">
            <h1 className="text-center"> Manage Products</h1>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {drones.map((drone) => (
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
                                        {drone.description?.slice(0, 170)}...
                                    </Card.Text>
                                    <Card.Text className="products-card-para">
                                        Price: ${drone.price}
                                    </Card.Text>

                                    <button
                                        onClick={() => handleDelete(drone?._id)}
                                        className="products-card-button"
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
