import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import "./Reviews.css";

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
        <div className="reviews-style">
            <h2 className="text-center">Clients Review</h2>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {reviews.map((review) => (
                        <Col key={review?._id}>
                            <Card className="reviews-card-style">
                                <span>
                                    <img src={review?.img} alt="" />
                                    <Rating
                                        className="ms-3 icon-color"
                                        initialRating={review?.rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        readonly
                                    ></Rating>
                                </span>
                                <Card.Body>
                                    <Card.Title className="review-card-title">
                                        {review?.name}
                                    </Card.Title>
                                    <Card.Text className="review-card-para">
                                        {review?.review?.slice(0, 80)}...
                                    </Card.Text>
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
