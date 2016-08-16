import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    }
}

const MessageListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList)


export default MessageListContainer
