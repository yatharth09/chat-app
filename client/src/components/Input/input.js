import React from 'react';
import './styles.css';
import send from '../../icons/send.png';

const input = ({room, setMessage, sendMessage, message}) => {
  return (
    <form className='form'>
         <input
            className='input' 
            type='text'
            placeholder='Type.....'
            value={message} 
            onKeyPress={e => e.key === 'Enter' ? sendMessage(e): null} 
            onChange={(e) => setMessage(e.target.value)} />
            <button className='sendButton' onClick={(e)=>sendMessage(e)}>Send</button>
    </form>
  )
}

export default input;