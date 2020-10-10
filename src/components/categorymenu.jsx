import React from 'react'
import { Link } from 'react-router-dom'
import "../componentcss/category.css"
export const Category = () => {
    return (
        <div className="category-menu">
            <ul className="category-menu_list">
                <li className="category-menu_list-item">
                    <Link to="/calendar"> My Reservations </Link>
                </li>
                <li className="category-menu_list-item">
                    <Link>Team Booking</Link> 
                </li>
                <li className="category-menu_list-item">
                    <Link>Equipment Management</Link> 
                </li>
                <li className="category-menu_list-item">
                    <Link >Check Ins / Check Out</Link> 
                </li>
            </ul>
        </div>
    )
}