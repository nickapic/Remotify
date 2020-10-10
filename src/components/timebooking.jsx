import React from 'react'
import { Calendar } from 'antd';
import 'antd/dist/antd.css';

export const TimeBooking = () => {
    return (
        <div className="time-booker">
            <div className="text-headline">What time would you like to Book?</div>
            <div className="calendar-section">
                <Calendar fullscreen={false} className="calender"/>
            </div>
            
        </div>
    )
}
