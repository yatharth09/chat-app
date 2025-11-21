import React from 'react'
import './styles.css';

const Message = ({message, name}) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if(message.user === trimmedName){
    isSentByCurrentUser = true;
  }
  return (
    isSentByCurrentUser? (
      <div className='messageContainer justifyEnd'>
        <p className='sentText pr-10'>{name}</p>
          <div className='messageBox backgroundBlue'>
            <p className='messageText colorWhite'>{message.text}</p>
          </div>
      </div>

    ):(
      <div className='messageContainer justifyStart'>
        <p className='sentText pl-10'>{message.user}</p>
          <div className='messageBox backgroundLight'>
            <p className='messageText colorDark'>{message.text}</p>
          </div>

      </div>
    )
    
  )
}

export default Message