import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MessageList from '../components/MessageList'
import * as Actions from '../actions'

const App = () => (
    <div>
        <MessageList/>
    </div>
)

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList)
