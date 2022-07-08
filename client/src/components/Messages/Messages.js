import React from 'react';
import './styles.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';

const Messages = ({name, messages}) => {
    
  return (
    <ScrollToBottom className="messages">
        {messages? (messages.map((message, i)=> <div key={i}><Message message={message} name={name}/></div>)):(null)}
    </ScrollToBottom>
  )
}

export default Messages;