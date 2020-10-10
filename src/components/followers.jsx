import React from 'react'
import { Profile } from './profile'

export const Followers = () => {
    return (
        <div className="followers">
            <Profile name="Aniket" position="IT Specialist" setting="false" />
            <Profile name="Agota" position="IT Specialist" setting="false"/>
            <Profile name="Ema" position="IT Specialist" setting="false"/>
            <Profile name="Migle" position="IT Specialist"/> 
            <Profile name="Aniket" position="IT Specialist" />
            <Profile name="Agota" position="IT Specialist"/>
            <Profile name="Ema" position="IT Specialist"/>
            <Profile name="Migle" position="IT Specialist"/>
        </div>
    )
}
