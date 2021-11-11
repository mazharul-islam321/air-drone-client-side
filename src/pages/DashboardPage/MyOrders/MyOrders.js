import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        const uri = `${user?.email}`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setMyOrder(data));
    }, [user.email]);
    return (
        <div className="my-booking-style">
            <h1>
                this is <span className="information">my order page</span>
            </h1>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {myOrder.map((order) => (
                        <Col key={order?._id}>
                            <div className="my-booking-card">
                                <div>
                                    <img src={order?.placeImg} alt="" />
                                </div>
                                <div>
                                    <h4>{order?.placeName}</h4>
                                    <p>
                                        {order?.placeDescriptions.slice(0, 50)}
                                        ...
                                    </p>
                                    <p>{order?.addres}</p>
                                    <p>{order?.phone}</p>
                                    <p>${order?.placePrice}</p>
                                    <p>status: {order?.status}</p>
                                    <button
                                    // onClick={() => handleDelete(order?._id)}
                                    >
                                        delete
                                    </button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;
