import React from 'react'
import { Profile } from './profile'

export const Followers = () => {
    return (
        <div className="followers">
            <Profile name="Aniket" position="IT Specialist" />
            <Profile name="Tadas" position="IT Team Lead" setting="false"/>
            <Profile name="Agota" position="IT Specialist"/> 
            <Profile name="Migle" position="IT Specialist"/>
        </div>
    )
}
