import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as RemoteSVG } from "./remote.svg";


export const HeroPage = () => {
    return (
        <div className="hero-page">
            <div className="hero-page_left">
                <h2 className="hero-page_left-heading">Bringing people, tools and workplaces together</h2>
                <p className="hero-page_left-paragraph">Remotify is a tool which allows empoyee the flexibility of working from the Office by booking time slots for when they wanna work in the office. And Introduces a new Social Aspect which notifies you about when the people you follow are in the office so you can go to Office accordingly</p>
                <Link to="/dashboard">Take Me to my Dashboard</Link>
            </div>
            <div className="hero-page_right">
                    <RemoteSVG width="120%%" />
            </div>
        </div>
    )
}
