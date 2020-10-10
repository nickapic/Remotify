import React, { useState } from 'react'

export const Profile = ({name, position, setting = false }) => {
    const [followed, setFollowed] = useState(setting)
    const onClick = e =>{
        if(followed){
            setFollowed(false)
        }else{
            setFollowed(true)
        }
    }
    return (
        <div className="profile">
            <div className="profile-left">
            <h3 className="profile_name">
                {name}
            </h3>
            <p className="profile_para">{position}</p>
            </div>
            <div className="profile-right">
                <button className="profile-button" onClick={onClick}>{followed ? 'Follow' : 'Unfollow'}</button>
            </div>
            
        </div>
    )
}
