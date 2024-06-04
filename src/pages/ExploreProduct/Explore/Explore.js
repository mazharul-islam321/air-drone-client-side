import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Explore = () => {
	// const { setIsLoading } = useAuth();
	const [drones, setDrones] = useState([]);

	useEffect(() => {
		const uri = "https://air-drone-server-side.vercel.app/products";
		fetch(uri)
			.then((res) => res.json())
			.then((data) => {
				// setIsLoading(false);
				setDrones(data);
			});
	}, []);
	// setIsLoading
	return (
		<div className="products-style">
			<h1 className="text-center">Explore All Product</h1>
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
										{drone.description?.slice(0, 70)}...
									</Card.Text>
									<Card.Text className="products-card-para">
										${drone.price}
									</Card.Text>
									<Link to={`/placeorder/${drone._id}`}>
										<button className="products-card-button">
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

export default Explore;
