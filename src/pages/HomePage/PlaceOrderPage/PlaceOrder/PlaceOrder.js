import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import PlaceForm from "../PlaceForm/PlaceForm";

const PlaceOrder = () => {
    const { id } = useParams();
    // console.log(id);
    const [order, setOrder] = useState({});
    useEffect(() => {
        const uri = `http://localhost:4000/products/${id}`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [id]);
    // console.log(order);
    return (
        <>
            <Header></Header>
            <div>
                <h2>
                    this is place order page. here will be a form and a
                    description
                </h2>
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <img
                                src={order?.img}
                                alt=""
                                className="img-fluid"
                            />
                            <h1>Name: {order?.name}</h1>
                            <h5>price: {order?.price}</h5>
                            <p>{order?.description}</p>
                        </Col>
                        <Col md={6} xs={12}>
                            <PlaceForm order={order}></PlaceForm>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default PlaceOrder;
