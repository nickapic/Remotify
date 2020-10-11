import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {

    return (
        <div className="sidebar">
            <Link to="/" href="#">
                <i className="fas fa-house-user sidebar-logo"></i>
            </Link>
            <Link to="/alerts" href="#">
                <i className="fas fa-exclamation-triangle sidebar-logo"></i>
            </Link>
            <Link to="/equipment" href="#">
                <i className="far fa-hdd sidebar-logo"></i>
            </Link>
            <Link to="/" href="#">
                <Button onClick="" className="fas fa-sign-out-alt sidebar-logo"></Button>
            </Link>
        </div>
    );
};
