import react from 'react';
import home from '../../img/home.png';
import noti from '../../img/noti.png';
import comment from '../../img/comment.png';
import {UilSetting} from '@iconscout/react-unicons';
import './RightSide.css';
import TrendCard from '../TrendCard/TrendCard';


const RightSide = () => {
    return(
        <div className="rightSide">
            <div className="navIcons">
                <img src={home} alt="" />
                <UilSetting/>
                <img src={noti} alt="" />
                <img src={comment} alt="" />
            </div>
            <TrendCard/>

            <button className='button r-button'>
                share
            </button>
        </div>

        
    )
}

export default RightSide;