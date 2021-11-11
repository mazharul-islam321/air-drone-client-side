import React from "react";
import { useForm } from "react-hook-form";
// reset
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        fetch("http://localhost:4000/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    console.log(data);
                    // setSuccess(true);
                }
            });
        reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    required
                />
                <input type="submit" value="submit" className="submit-form" />
            </form>
        </div>
    );
};

export default MakeAdmin;
