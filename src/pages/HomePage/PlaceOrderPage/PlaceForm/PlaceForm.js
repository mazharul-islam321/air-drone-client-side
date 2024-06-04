import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import "./PlaceForm.css";

const PlaceForm = (props) => {
	const { name, description, img, price } = props.order;
	const { user } = useAuth();
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		data.status = "pending";
		const uri = "https://air-drone-server-side.vercel.app/orders";
		fetch(uri, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert("place order successfully");
				}
				reset();
			});
	};
	useEffect(() => {
		reset();
	}, [props, reset, user]);
	return (
		<div className="confirm-form w-75  mx-auto py-3">
			<h2 className="text-center">Confirm Order</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="">
				<input {...register("name")} defaultValue={name} />
				<input
					{...register("description")}
					defaultValue={description}
				/>
				<input {...register("img")} defaultValue={img} />
				<input
					type="number"
					{...register("price")}
					defaultValue={price}
				/>
				<input
					{...register("userName")}
					defaultValue={user?.displayName}
				/>
				<input {...register("email")} defaultValue={user?.email} />
				<input
					{...register("address")}
					placeholder="your address"
					required
				/>
				<input
					type="number"
					{...register("phone")}
					placeholder="your number"
					required
				/>
				<input type="submit" className="confirmbutton" />
			</form>
		</div>
	);
};

export default PlaceForm;
