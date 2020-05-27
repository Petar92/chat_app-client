import React from 'react'

const MessageDialog = (props) => {

    return(
        <div key="10">
            {props.msgs.map(message => <div key={Math.floor((Math.random()*100000))}>{message.name}: {message.message}</div>)}
        </div>
    )
}

export default MessageDialog