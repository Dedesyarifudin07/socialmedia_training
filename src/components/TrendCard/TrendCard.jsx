import React from 'react';
import { TrendData } from '../../Data/TrendsData';
import './TrendCard.css'
const TrendCard = () => {
    return(
        <div className="trendCard">
            <h3>Trends for you</h3>
            {TrendData.map((trend) => {
                return(
                    <div className="trend">
                        <span>#{trend.name}</span><br />
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard;