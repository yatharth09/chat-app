import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './styles.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1>Online:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img className="icon" alt="Online Icon" src={onlineIcon}/>
                    &nbsp;{name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;