const users = [];

const addUser = ({id, name, room}) => {
    //Yatharth Thapa = yatharththapa
    
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    console.log({name, room});

    const existingUser = users.find((user) => user.room === room && user.name === name);
    if(existingUser){
        console.log("works");
        return {error: 'Username is taken'};
        
    }
    

    const user = {id, name, room};
    users.push(user);

    return {user};

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id );

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => {
    console.log(users);
    return users.find((user)=> user.id === id)
};

const getUserInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {addUser, removeUser, getUser, getUserInRoom};
