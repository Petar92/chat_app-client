import React from 'react'

const MessageDialog = (props) => {

    return(
        <div>
            {console.log(props.msgs)}
            {props.msgs.map(message => <div>{message.name}: {message.message}</div>)}
        </div>
    )
}

export default MessageDialog