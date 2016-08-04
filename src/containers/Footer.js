import React from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../actions/index.js'

let Footer = ({dispatch})  => {
    let postInput, authorInput
    return (
        <div>
            <div>Msg:
                <form onSubmit={e => {
                    let post = postInput.value
                    let author = authorInput.value
                    e.preventDefault()
                    if (!postInput.value.trim()) {
                      return
                    }
                    dispatch(addMessage({post, author}))
                    postInput.value = ''
                }}>
                    <input type="text"  ref={node => {postInput = node}} onKeyUp={e => {

                    }}/>
                </form>
            </div>
            <div>Name:
                <form>
                    <input type="text" ref={node => {authorInput = node}}/>
                </form>
            </div>
        </div>
    )
}
Footer = connect()(Footer)
export default Footer
