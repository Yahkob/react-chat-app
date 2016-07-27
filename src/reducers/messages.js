import {ADD_MESSAGE} from '../constants/ActionTypes'

const initialState = [
  {
    messages: [],
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
      case ADD_MESSAGE :
          let {text, author} = action;
          return [
              {
                  text,
                  author
              },
              ...state
          ]
  }
}
