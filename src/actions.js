const ADD_MSG = 'ADD_MSG';

function addMsg(text) {
  return {type: ADD_MSG, text};
}

export {addMsg};
