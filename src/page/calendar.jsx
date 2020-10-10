import React, { Fragment } from 'react'
import { Category } from '../components/categorymenu'
import { ReactComponent as CalendarSVG } from "./calendar.svg";
import { ReactComponent as LegendSVG } from "./Legend.svg";

export class CalendarPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Category />
                <div className="calender-mine">
                    <CalendarSVG className="calender_svg" />
                    <LegendSVG className="legend_svg" />
                </div>
            </Fragment>
        )
    }
}