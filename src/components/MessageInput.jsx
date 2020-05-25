import React from 'react'

const MessageInput = (props) => {

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            props.getMessage(e.target.value)
            e.target.value = ""
        }
    }

    return(
        <div>
            <textarea onKeyDown={handleKeyDown}></textarea>
        </div>
    )
}

export default MessageInput