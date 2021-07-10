import React from 'react'
import Chat from "./Chat";

function Chats() {
    return <div className = "chats">
        <Chat
    name = "Adonis"
    message = "Whoof!"
    timestamp = "40 seconds ago"
    profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4X0fwAtbfiSwRvN3-Fk1pE1rKMsAgWjcpbA&usqp=CAU" />
        <Chat
    name = "Oscar"
    message = "Get into my belly!"
    timestamp = "59 seconds ago"
    profilePic = "https://th.bing.com/th/id/OIP.aNRusPbrj4MVdqBtF9JcFQExDM?w=241&h=180&c=7&o=5&pid=1.7" />
        <Chat
    name = "Earl"
    message = "I wonder when Dad is going to finish these steaks?"
    timestamp = "40 seconds ago"
    profilePic = "https://th.bing.com/th/id/OIP.3DyekykHbmVTqMGPosF7nQHaLH?w=115&h=180&c=7&o=5&pid=1.7" />
        </div>;
}

export default Chats