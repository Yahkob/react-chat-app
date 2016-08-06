import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'
import * as constants from '../constants/constants'
function addMessage({post, author}) {
    return {
        type: types.ADD_MESSAGE,
        post,
        author
    }
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(constants.GET_MESSAGES)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}


function requestPosts() {
  return {
    type: types.REQUEST_POSTS
  }
}

function receivePosts(data) {
  return {
    type: types.RECEIVE_POSTS,
    fetchedPosts: data
  }
}

export {addMessage, fetchPosts}
