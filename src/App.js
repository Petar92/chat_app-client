import React, { useState, useEffect } from 'react';
import MessageDialog from './components/MessageDialog'
import MessageInput from './components/MessageInput'

const App = () => {

    const [messages, addMessage] = useState({msgState: [{name:"testState", message: "testMessage"}]})

    const createRandomUsername = () => {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( var i = 0; i < 6; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     

    const connection = new WebSocket('ws://localhost:8080/ws/websocket')

    connection.onopen = () => console.log("connected")

//    useEffect(
        connection.onmessage = (message) => {
            console.log(message)
            //const data = JSON.parse(message)
            addMessage({ ...messages, msgState: messages.msgState.concat(message)})
        }
//    )

    const getMessage = (message) => {
        const data = {name: createRandomUsername(), message: message}
        connection.send(JSON.stringify(data))
        console.log(data)
    }

    return(

        <div>
            <MessageDialog msgs={messages.msgState} />

            <MessageInput getMessage={getMessage} />
        </div>
    )
}

export default App;