import React from 'react'
import Message from './Message'

const MessageList = ({ messages })  => {
    return (
        <div>
            {messages.map(message =>
                <Message
                {...message}
                key={message.id}
                />
            )}
        </div>
    )
}

export default MessageList
