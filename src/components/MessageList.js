import React from 'react'
import Message from './Message'

const MessageList = ({ messages })  => {
    return (
        <div>
            {messages.posts.map(message =>
                <Message
                {...message}
                key={message._id || message.cid}
                />
            )}
        </div>
    )
}

export default MessageList
