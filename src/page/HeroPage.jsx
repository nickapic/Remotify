import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as RemoteSVG } from "./remote.svg";


export const HeroPage = () => {
    return (
        <div className="hero-page">
            <div className="hero-page_left">
                <h2 className="hero-page_left-heading">Bringing people, tools and workplaces together</h2>
                <p className="hero-page_left-paragraph">The 1st ever product enabling flexible workplace management and the joy of socializing with colleagues. </p>
                <Link to="/dashboard">Start</Link>
            </div>
            <div className="hero-page_right">
                    <RemoteSVG width="120%%" />
            </div>
        </div>
    )
}
