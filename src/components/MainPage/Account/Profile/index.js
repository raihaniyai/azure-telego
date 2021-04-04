import React from 'react';
import './style.css';

const Profile = () => {

    return (
        <div className="card" style={{display: "block"}}>
            <div className="content">
                <div className="image">
                    <img src="images/profile.svg" width="75px" alt="profile"/>
                </div>
                <div>
                    <div className="name">Dharmawan Santosa</div>
                    <div className="phone">+62 812 3456 7890</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;