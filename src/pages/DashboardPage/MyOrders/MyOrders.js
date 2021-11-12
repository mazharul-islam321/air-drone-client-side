import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        const uri = `http://localhost:4000/orders/${user?.email}`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setMyOrder(data));
    }, [user.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm(
            "are you sure, you want to Cancle your Order!!!"
        );
        if (proceed) {
            fetch(`http://localhost:4000/orders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("cancled successfully");
                        const remainingOrder = myOrder.filter(
                            (order) => order._id !== id
                        );
                        setMyOrder(remainingOrder);
                    }
                });
        }
    };
    return (
        <div className="products-style">
            <h1 className="text-center">My Order</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {myOrder.map((order) => (
                        <Col key={order?._id}>
                            <div className="products-card-style">
                                <div>
                                    <img
                                        src={order?.img}
                                        alt=""
                                        className="products-card-img"
                                    />
                                </div>
                                <div>
                                    <h4 className="products-card-title">
                                        {order?.name}
                                    </h4>
                                    <p>
                                        {order?.description}
                                        ...
                                    </p>
                                    <p>{order?.address}</p>
                                    <p>{order?.phone}</p>
                                    <p>${order?.price}</p>
                                    <p>status: {order?.status}</p>
                                    <button
                                        className="products-card-button"
                                        onClick={() => handleDelete(order?._id)}
                                    >
                                        cancle
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
