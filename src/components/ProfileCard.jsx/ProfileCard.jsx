import React from "react";
import profile from '../../img/profileImg.jpg';
import Cover from '../../img/cover.jpg';
import './ProfileCard.css';


const ProfileCard = () => {
    return(
        <div className="ProfileCard">
            <div className="profileImages">
                <img src={Cover} alt="" />
                <img src={profile} alt="" />
            </div>

            <div className="profileName">
                <span> Dede Syarifudin</span>
                <span>teknik komputer dan jaringan
                </span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                <div className="follow">
                        <span>6,890</span>
                        <span>followings</span>
                    </div>

                    <div className="vl"></div>
                    <div className="follow">
                        <span>1</span>
                        <span>followers</span>
                    </div>
                </div>
                   
                <hr />
            </div>
            <span>
                MY PROFILE
            </span>
            

        </div>
    )
}

export default ProfileCard;