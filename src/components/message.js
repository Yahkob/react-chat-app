import React, { PropTypes } from 'react'
import moment from 'moment'
import style from './style.css'

const Message = ({ post, author, createdOn, clientId }) => (
    <div className={style.loader}>
        <span>{author}: {post} </span> - {moment(createdOn).fromNow()} {clientId && <img src={require('../assets/loader.gif')}/>}
    </div>
)

Message.propTypes = {
  post: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  clientId: PropTypes.number
}


export default Message
