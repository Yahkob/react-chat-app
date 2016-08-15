import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'
import * as constants from '../constants/constants'
import * as ui from '../constants/ui'
import _ from 'lodash'
function addMessage ({post, author, clientId}) {
    return {
        type: types.ADD_MESSAGE,
        post,
        author,
        clientId
    }
}

function changeAuthor (author) {
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
    return dispatch => {
        let clientId = _.uniqueId()
        dispatch(addMessage({post, author, clientId}))
        return fetch(constants.POST_MESSAGE, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({post, author})
        })
        .then(response => response.json())
        .then(({_id, createdOn}) => dispatch(messagePosted({_id, clientId, createdOn})))

    }
}

function messagePosted ({_id, clientId, createdOn}) {
    return {
        type: types.MESSAGE_POSTED,
        _id,
        clientId,
        createdOn
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

export {addMessage, fetchMessages, toggleReadOnlyAuthor, changeAuthor, postMessage, requestMessages}
