import {ADD_MESSAGE} from '../constants/ActionTypes'
import _ from 'lodash'
const initialState = [
    {author: 'Guest', post: 'Hello World!', id: _.uniqueId, createdOn: Date.now()},
    {author: 'Guest', post: 'Hello World 2!', id: _.uniqueId, createdOn: Date.now()}
]

export default function messages (state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            let {post, author, id} = action;
            author = author || 'Guest'
            return [
                {
                    post,
                    author,
                    id: _.uniqueId()
                },
                ...state

            ]
    default:
      return state
    }
}
