import React, { Fragment } from 'react'
import { Category } from '../components/categorymenu'
import { ReactComponent as CalendarSVG } from "./calendar.svg";
export const CalenderPage = () => {
    return (
        
        <Fragment>
        <Category />
        <div className="calender-mine">
            <CalendarSVG/>
        </div>

        </Fragment>
    )
}
