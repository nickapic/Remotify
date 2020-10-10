import React from 'react'
import { Category } from '../components/categorymenu'
import stats from './stats.jpg'

export class AnalyticsPage extends React.Component {
    

    render() {
        return (
            <div>
                <Category />
                <img height="500px" width="800px" src={ stats} alt="stats" />
            </div>
        )
    }
}