import React, {useRef} from 'react'

const MessageInput = (props) => {

    const myRef =  useRef(null)

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            props.getMessage(e.target.value)
            e.target.value = ""
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        props.getMessage(myRef.current.value)
        myRef.current.value = ""
    }

    return(
        <div key="5">
            <textarea key="6" ref={myRef} onKeyDown={handleKeyDown}></textarea>
            <button key="7" onClick={handleClick}>send</button>
        </div>
    )
}

export default MessageInput