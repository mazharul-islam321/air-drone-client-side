import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const uri = "http://localhost:4000/reviews";
        fetch(uri)
            .then((res) => res.json())
            .then((data) => {
                // setIsLoading(false);
                setReviews(data);
            });
    }, []);
    // console.log(reviews);
    return (
        <div>
            <h2>this is review section</h2>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {reviews.map((review) => (
                        <Col key={review?._id}>
                            <Card className="card-style">
                                <Card.Img
                                    variant="top"
                                    src={review?.img}
                                    className="card-img"
                                />
                                <Card.Body>
                                    <Card.Title className="card-title">
                                        {review?.name}
                                    </Card.Title>
                                    <Card.Text className="card-para">
                                        {review?.review?.slice(0, 80)}...
                                    </Card.Text>
                                    <div>
                                        <Rating
                                            initialRating={review?.rating}
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                            readonly
                                        ></Rating>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;
