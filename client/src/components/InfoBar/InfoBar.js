import React from 'react';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import "./styles.css"

const InfoBar = ({room}) => {
  return (
    <div className='infoBar'>
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href='/'><img className="closeIcon" src={closeIcon} alt="closeImage"/></a>
        </div>
    </div>
  )
}

export default InfoBar