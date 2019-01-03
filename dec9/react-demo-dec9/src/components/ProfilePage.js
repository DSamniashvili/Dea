import React from 'react';

export const ProfilePage = props => {
    return (
        <div className="profile">
            <h1 className="profile--title">Welcome, <span className="to--capitalize"> {localStorage.getItem('authorized')}</span></h1>
            <p>Profile</p>
        </div>
    )
}