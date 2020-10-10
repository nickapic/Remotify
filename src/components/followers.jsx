import React from 'react'
import { Profile } from './profile'

export const Followers = () => {
    return (
        <div className="followers">
            <Profile name="Aniket" position="IT Specialist" />
            <Profile name="Agota" position="IT Specialist"/>
            <Profile name="Ema" position="IT Specialist"/>
        </div>
    )
}
