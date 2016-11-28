import React, {PropTypes} from 'react'
import Message from './Message'

const MessageList = ({ messages })  => {
    return  (
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

MessageList.propTypes = {
    messages: PropTypes.object.isRequired
}

export default MessageList
