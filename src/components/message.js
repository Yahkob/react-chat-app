import React, { PropTypes } from 'react'
import moment from 'moment'

const Message = ({ post, author, createdOn }) => (
    <div>
        <span>{author}: {post} </span> - {moment(createdOn).fromNow()}
    </div>
)

Message.propTypes = {
  post: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdOn: PropTypes.number.isRequired
}


export default Message
