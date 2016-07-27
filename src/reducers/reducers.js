import {ADD_MSG} from '../constants/ActionTypes.js';

const initialState = [
  {
    msgs: [],
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
      case: ADD_MSG {
          let {text, author} = action;
          return [
              {
                  text,
                  author
              },
              ...state
          ];
      }
  }
}
