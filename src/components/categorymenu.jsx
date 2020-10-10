import React from 'react'
import { Link } from 'react-router-dom'

export const Category = () => {
    return (
        <div className="category-menu">
            <ul className="category-menu_list">
                <li className="category-menu_list-item">
                    <Link to="/calendar"> My Reservations </Link>
                </li>
                <li className="category-menu_list-item">
                    <Link to="/">My Equipment </Link> 
                </li>
                <li className="category-menu_list-item">
                    <Link to="/colleagues">My Colleagues</Link> 
                </li>
                <li className="category-menu_list-item">
                    <Link to="/">Analytics</Link> 
                </li>
            </ul>
        </div>
    )
}
