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
                    <Link>Equipment </Link> 
                </li>
                <li className="category-menu_list-item">
                    <Link >Check Ins / Check Out</Link> 
                </li>
                <li className="category-menu_list-item">
                    <Link>Analytics</Link> 
                </li>
            </ul>
        </div>
    )
}
