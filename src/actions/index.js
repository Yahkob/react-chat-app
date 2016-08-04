import * as types from '../constants/ActionTypes'

function addMessage({post, author}) {
    return {
        type: types.ADD_MESSAGE,
        post,
        author
    }
}

export {addMessage}
