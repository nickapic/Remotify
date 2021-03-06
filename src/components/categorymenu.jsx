import React from 'react'
import { Link } from 'react-router-dom'

export const Category = () => {
    return (
        <div className="category-menu">
            <ul className="category-menu_list">
                <li className="category-menu_list-item">
                    <Link to="/my-reservations">My Reservations </Link>
                </li>
                <li className="category-menu_list-item">
                    <Link to="/equipment">My Equipment </Link> 
                </li>
                <li className="category-menu_list-item">
                    <Link to="/dashboard">New Booking</Link> 
                </li>
                <li className="category-menu_list-item">
                    <Link to="/colleagues">My Colleagues</Link> 
                </li>
                <li className="category-menu_list-item">
                    <Link to="/analytics">Analytics</Link> 
                </li>
                <li className="category-menu_list-item">
                    <Link to="/updates">Updates</Link> 
                </li>
            </ul>
        </div>
    )
}
