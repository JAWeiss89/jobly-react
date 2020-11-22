import React from 'react';

const Profile = ( {user} ) => {
    return (
        <div className="Profile">
            <h2>{user.username}'s Profile</h2>
            <p>Email: {user.email}</p>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
        </div>
    )
}

export default Profile;