import React from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";
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
                    alert("admin created successfully");
                    reset();
                    // console.log(data);
                }
            });
    };
    return (
        <div className="admin-form">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-50 mx-auto for-shadow py-3"
            >
                <h2 className="text-center">Make an Admin</h2>
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
