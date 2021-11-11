import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

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
                                    <img src={order?.img} alt="" />
                                </div>
                                <div>
                                    <h4>{order?.name}</h4>
                                    <p>
                                        {order?.description}
                                        ...
                                    </p>
                                    <p>{order?.address}</p>
                                    <p>{order?.phone}</p>
                                    <p>${order?.price}</p>
                                    <p>status: {order?.status}</p>
                                    <button
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
