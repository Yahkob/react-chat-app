import {ADD_MESSAGE} from '../constants/ActionTypes'

const initialState = [
    {author: 'Guest', post: 'Hello World!', id: 2, createdOn: Date.now()},
    {author: 'Guest', post: 'Hello World 2!', id: 1, createdOn: Date.now()}
]

export default function messages (state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            let {text, author, id} = action;
            return [
                {
                    text,
                    author,
                    id
                },
                ...state

            ]
    default:
      return state
    }
}
