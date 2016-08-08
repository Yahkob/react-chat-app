import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'
import * as constants from '../constants/constants'
import * as ui from '../constants/ui'
function addMessage ({post, author}) {
    let clientId = _.uniqueId
    postMessage({post, author})
    markMessageAsPending(clientId)
    return {
        type: types.ADD_MESSAGE,
        post,
        author,
        clientId
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

function postMessage ({post, author}) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', constants.POST_MESSAGE);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
        if (xhr.status !== 200) {
            console.error('Post request failed')
        }
    };
    xhr.send(encodeURI(`post=${post}&author=${author}`));
}

function markMessageAsPending (clientId) {
    return {
        type: ui.POST_PENDING,
        clientId
    }
}

function fetchMessages () {
  return dispatch => {
    dispatch(requestMessages())
    return fetch(constants.GET_MESSAGES)
      .then(response => response.json())
      .then(json => dispatch(receiveMessages(json)))
  }
}


function requestMessages () {
  return {
    type: types.REQUEST_POSTS
  }
}

function receiveMessages (data) {
  return {
    type: types.RECEIVE_POSTS,
    fetchedMessages: data
  }
}

export {addMessage, fetchMessages, toggleReadOnlyAuthor, onAuthorChange}
