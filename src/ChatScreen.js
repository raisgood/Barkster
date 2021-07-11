import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([ 
        {
            name: 'Ellen',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8R5QMsisJIZAYqBsahbU19T4QAyAE4moOPg&usqp=CAU',
            message: 'Whats up'
        },
        {
            name: 'Ellen',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8R5QMsisJIZAYqBsahbU19T4QAyAE4moOPg&usqp=CAU',
            message: 'Hows it going'
        },
        {
            message: 'Hows it going!',
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages ([...messages, { message: input }]);
        setInput(""); 
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                You Matched with Ellen on 06/12/21
            </p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}

            <div>
                <form className="chatScreen__input">
                    <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    type="text"  
                    placeholder="Type a message..." 
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreen;
