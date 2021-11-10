import React from "react";
import { useForm } from "react-hook-form";
// reset
const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        /* const uri = `https://dark`;
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
                    alert("added successfullay");
                    reset();
                }
            }); */
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name")}
                    type="email"
                    placeholder="Place Name"
                    required
                />
                <input type="submit" value="submit" className="submit-form" />
            </form>
        </div>
    );
};

export default MakeAdmin;
