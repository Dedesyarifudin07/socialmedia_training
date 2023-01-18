import React from 'react';
import { Followers } from '../../Data/FollowersData';
import './FollowersCard.css';

const FollowersCard = () => {
    return(
        <div className='FollowerCard'>
           <h3>Who is following you</h3>
            {Followers.map((follower,id) => {
                return(
                    <div className="follower">
                       <img src={follower.img} alt="" className='FollowerImg'/>
                       <div className='name'>
                       <span>{follower.name}</span>
                       <span>{follower.username}</span>
                       </div>
                        <button className='button fc-button'>follow</button>
                       
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard;