import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";

const PlaceForm = (props) => {
    const { name, description, img, price } = props.order;
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        data.status = "pending";
        const uri = "http://localhost:4000/orders";
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
                    alert("place booking successfull");
                }
            });
    };
    useEffect(() => {
        reset();
    }, [props, reset, user]);
    return (
        <div>
            <h4>{name}</h4>
            <h2>
                this is place form page. herer will show a form for submit order
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <input {...register("address")} />
                <input type="number" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default PlaceForm;