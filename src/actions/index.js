import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'
import * as constants from '../constants/constants'
import * as ui from '../constants/ui'
function addMessage ({post, author}) {
    return {
        type: types.ADD_MESSAGE,
        post,
        author
    }
}

function onAuthorChange (author) {
    return {
        type: ui.AUTHOR_CHANGE,
        author
    }
}

function toggleReadOnlyAuthor (authorIsReadOnly) {
    return {
        type: ui.TOGGLE_READ_ONLY_AUTHOR,
        authorIsReadOnly
    }
}

function fetchPosts () {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(constants.GET_MESSAGES)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}


function requestPosts () {
  return {
    type: types.REQUEST_POSTS
  }
}

function receivePosts (data) {
  return {
    type: types.RECEIVE_POSTS,
    fetchedPosts: data
  }
}

export {addMessage, fetchPosts, toggleReadOnlyAuthor, onAuthorChange}
