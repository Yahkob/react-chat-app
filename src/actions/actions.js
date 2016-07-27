import * as types from '../constants/ActionTypes'

function addMessage(text) {
  return {type: types.ADD_MESSAGE, text}
}

export {addMessage}
