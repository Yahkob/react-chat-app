import React, { PropTypes } from 'react'
import moment from 'moment'

const Message = ({ post, author, createdOn, clientId }) => (
    <div>
        <span>{author}: {post} </span> - {moment(createdOn).fromNow()} {clientId ? ' Posting...' : ''}
    </div>
)

Message.propTypes = {
  post: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  clientId: PropTypes.number
}


export default Message
