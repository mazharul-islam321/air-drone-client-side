import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const uri = "http://localhost:4000/reviews";
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
                    alert("added review successfull");
                    reset();
                }
            });
    };
    return (
        <div>
            <h2>this is review page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("img")}
                    placeholder="Your img Url"
                    required
                />
                <input {...register("name")} placeholder="Your Name" required />
                <textarea
                    {...register("review")}
                    placeholder="Your Review"
                    required
                />
                <input
                    type="number"
                    {...register("rating", { min: 0, max: 5 })}
                    placeholder="Please give Rating (0-5)"
                    required
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;
