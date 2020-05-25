import React, { useState, useEffect } from 'react';
import MessageDialog from './components/MessageDialog'
import MessageInput from './components/MessageInput'

const App = () => {

    const [messages, addMessage] = useState([])

    const makeid = () => {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( var i = 0; i < 6; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     

    const connection = new WebSocket('ws://localhost:8080/ws/websocket')

    useEffect(
        connection.onmessage = (message) => {
           // const data = JSON.parse(message.data)
            addMessage({ ...messages, messages: messages.concat(message)})
        }
    )

    const getMessage = (message) => {
        const data = {name: makeid, message: message}
        connection.send(JSON.stringify(data))
        //console.log(data)
    }

    return(

        <div>
            <MessageDialog msgs={messages} />

            <MessageInput getMessage={getMessage} />

            <button>send</button>

        </div>
    )
}

export default App;