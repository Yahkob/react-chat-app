import React, { PropTypes } from 'react'
import moment from 'moment'

const Message = ({ post, author, createdOn }) => (
    <div>
        <span>{author}: {post} </span> - {moment(createdOn).fromNow()}
    </div>
)


export default Message
