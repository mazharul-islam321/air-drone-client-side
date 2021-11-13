import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <Link to="/">
                <button className="notfound-btn">back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;
