import React from "react";
import { Redirect, Route } from "react-router";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <div className="text-center spiner-style">
                <Spinner animation="grow" variant="danger" />
            </div>
        );
    }

    return (
        <>
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        ></Redirect>
                    )
                }
            ></Route>
        </>
    );
};

export default PrivateRoute;
