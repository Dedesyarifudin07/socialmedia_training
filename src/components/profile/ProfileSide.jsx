import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSeacrh/LogoSearch";
import ProfileCard from "../ProfileCard.jsx/ProfileCard";
import './ProfileSIde.css';

const ProfileSide = () => {
    return(
        <div className="profileSide">
            <LogoSearch/>
            <ProfileCard/>
            <FollowersCard/>
        </div>
        
    )
}
export default ProfileSide;