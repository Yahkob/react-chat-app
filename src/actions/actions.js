import * as types from '../constants/ActionTypes.js';

function addMsg(text) {
  return {type: types.ADD_MSG, text};
}

export {addMsg};
