import React from 'react'
import {connect} from 'react-redux'
import {addMessage, toggleReadOnlyAuthor, onAuthorChange} from '../actions/index.js'
const mapStateToProps = (state) => {
    return {
        ui: state.ui
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMessage: ({post, author}) => {
            console.log(post,author)
            dispatch(addMessage({post, author}))
        },
        toggleReadOnlyAuthor: (isReadOnly) => {
            dispatch(toggleReadOnlyAuthor(isReadOnly))
        },
        onAuthorChange: (author) => {
            dispatch(onAuthorChange(author))
        }
    }
}

let Footer = ({ui, addMessage, toggleReadOnlyAuthor, onAuthorChange})  => {
    let postInput, authorInput
    let editableAuthor = (
        <input type="text" value={ui.author} ref={node => {authorInput = node}} onChange={e => {onAuthorChange(e.target.value)}} onBlur={e => {
            toggleReadOnlyAuthor(true)
        }}/>
    )
    let readOnlyAuthor = (
        <div>{ui.author}</div>
    )
    return (
        <div>
            <div>
                Msg:<form onSubmit={e => {
                    let post = postInput.value
                    let author = ui.author
                    e.preventDefault()
                    if (!postInput.value.trim()) {
                      return
                    }
                    addMessage({post, author})
                    postInput.value = ''
                }}>
                    <input type="text"  ref={node => {postInput = node}}/>
                </form>
            </div>
            <div>
                Name: {ui.authorIsReadOnly ? readOnlyAuthor : editableAuthor}
            </div>
        </div>
    )
}
Footer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)
export default Footer
