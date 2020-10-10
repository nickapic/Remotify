import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {

    return (
        <div className="sidebar">
            <Link href="#">
                <i class="fas fa-house-user sidebar-logo"></i>
            </Link>
            <Link href="#">
                <i class="fas fa-exclamation-triangle sidebar-logo"></i>
            </Link>
            <Link href="#">
                <i class="far fa-hdd sidebar-logo"></i>
            </Link>
            <Link href="#">
                <i class="fas fa-sign-out-alt sidebar-logo"></i>
            </Link>
        </div>
    );
};
