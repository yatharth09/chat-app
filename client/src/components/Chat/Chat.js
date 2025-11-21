import React,{useEffect, useState} from 'react';
import queryString from 'query-string';//to get the stuff from query
import io from 'socket.io-client';
import { useLocation } from 'react-router';
import './styles.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

let socket;


const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const[message, setMessage] = useState([]);
  const[messages, setMessages] = useState('');
  const ENDPOINT = 'http://localhost:5000';
  

  useEffect(()=>{
    const {name, room} = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit('join', {name,room},() => {});
    return () => {
      socket.disconnect();
      socket.off();
    }
  }, [ENDPOINT, location.search]);

  useEffect(()=>{
    socket.on('message',(message)=>{
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({users}) =>{
      setUsers(users);
    })
  }, [messages]);

  const sendMessage = (event) => {
    if(message){
      event.preventDefault();
      socket.emit('sendMessage', message, () => setMessage(''));
    }
    

  }

  

  return (
    <div className='outerContainer'>
      <div className="container">
        <InfoBar room={room} />
        <Messages name={name} messages={messages}/>
        <Input room={room} sendMessage={sendMessage} setMessage={setMessage} message={message} />
      </div>
      <TextContainer users = {users}/>
    </div>
  )
}

export default Chat