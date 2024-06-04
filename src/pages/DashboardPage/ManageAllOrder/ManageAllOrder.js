import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ManageAllOrder = () => {
	const [load, setLoad] = useState(true);
	const [manageOrder, setManageOrder] = useState([]);
	useEffect(() => {
		fetch("https://air-drone-server-side.vercel.app/orders")
			.then((res) => res.json())
			.then((data) => {
				setManageOrder(data);
				setLoad(false);
			});
	}, [load]);

	const handleDelete = (id) => {
		const proceed = window.confirm(
			"are you sure, you want to delete your Order!!!"
		);
		if (proceed) {
			fetch(`https://air-drone-server-side.vercel.app/orders/${id}`, {
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

		const uri = `https://air-drone-server-side.vercel.app/orders/${id}`;
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
		<div className="products-style">
			<h1 className="text-center">Manage Order</h1>
			<Container>
				<Row xs={1} md={3} className="g-4">
					{manageOrder.map((order) => (
						<Col key={order?._id}>
							<Card className="products-card-style">
								<Card.Img
									variant="top"
									src={order?.img}
									className="products-card-img"
								/>
								<Card.Body>
									<Card.Title className="products-card-title">
										User-Name: {order?.userName}
									</Card.Title>
									<h6 className="products-card-title">
										Drone: {order?.name}
									</h6>
									<Card.Text className="products-card-para">
										{order?.description?.slice(0, 140)}
										...
									</Card.Text>
									<p className="products-card-para">
										Price: ${order?.price}
									</p>
									<p className="products-card-para">
										status: {order?.status}
									</p>
									<button
										className="products-card-button"
										onClick={() => handleDelete(order?._id)}
									>
										delete
									</button>
									<button
										className="products-card-button ms-3"
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
