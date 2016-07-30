import {Component} from 'react'
import {ADD_MESSAGE} from '../constants/ActionTypes'


export default class Message extends Component {
  render () {
    return (
      <div>
        <span> {this.props.author} </span>
        <span> {this.props.post} </span>
      </div>
    )
  }
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired
};
