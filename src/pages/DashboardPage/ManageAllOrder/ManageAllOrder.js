import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ManageAllOrder = () => {
    const [load, setLoad] = useState(true);
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/orders")
            .then((res) => res.json())
            .then((data) => {
                setManageOrder(data);
                setLoad(false);
            });
    }, [load]);

    const handleDelete = (id) => {
        const proceed = window.confirm(
            "are you sure, you want to Cancle your Order!!!!!!"
        );
        if (proceed) {
            fetch(`http://localhost:4000/orders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remainingOrder = manageOrder?.filter(
                            (order) => order._id !== id
                        );
                        setManageOrder(remainingOrder);
                    }
                });
        }
    };

    const handleUpdate = (id) => {
        const updatestatus = manageOrder.find((update) => update?._id === id);
        updatestatus.status = "shipped";

        const uri = `http://localhost:4000/orders/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatestatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("status updated successfully");
                }
                setLoad(true);
            });
    };
    return (
        <div className="ManageBooking">
            <h2 className="manage-header">
                Manage Your <span>order</span>
            </h2>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {manageOrder.map((order) => (
                        <Col key={order?._id}>
                            <Card className="managecard">
                                <Card.Img
                                    variant="top"
                                    src={order?.img}
                                    className="manage-img"
                                />
                                <Card.Body>
                                    <Card.Title>{order?.userName}</Card.Title>
                                    <h5>Drone: {order?.name}</h5>
                                    <Card.Text>
                                        {order?.description}
                                        ...
                                    </Card.Text>
                                    <p>${order?.price}</p>
                                    <p>status: {order?.status}</p>
                                    <button
                                        onClick={() => handleDelete(order?._id)}
                                    >
                                        delete
                                    </button>
                                    <button
                                        onClick={() => handleUpdate(order?._id)}
                                    >
                                        {order?.status}
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

export default ManageAllOrder;
