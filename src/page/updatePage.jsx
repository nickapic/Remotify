import React from 'react'
import { Category } from '../components/categorymenu'
import { Updates } from '../components/updates'


export const UpdatePage = () => {
    return (
        <div className="">
            <Category/>
            <div className="update">
                <Updates/>
            </div>
        </div>
    )
}
