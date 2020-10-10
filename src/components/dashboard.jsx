import React from 'react'
import { Category } from './categorymenu.jsx'
import { TimeBooking } from './timebooking'

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <Category />
            <TimeBooking/>
        </div>
    )
}
