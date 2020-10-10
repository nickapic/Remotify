import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {

    return (
        <div className="sidebar">
            <Link to="/" href="#">
                <i className="fas fa-house-user sidebar-logo"></i>
            </Link>
            <Link to="/" href="#">
                <i className="fas fa-exclamation-triangle sidebar-logo"></i>
            </Link>
            <Link to="/" href="#">
                <i className="far fa-hdd sidebar-logo"></i>
            </Link>
            <Link to="/" href="#">
                <i className="fas fa-sign-out-alt sidebar-logo"></i>
            </Link>
        </div>
    );
};
