import * as types from '../constants/ActionTypes'
import _ from 'lodash'
const initialState = {
    posts: [
        {author: 'Guest', post: 'Hello World!', _id: _.uniqueId(), createdOn: Date.now()},
        {author: 'Guest', post: 'Hello World 2!', _id: _.uniqueId(), createdOn: Date.now()}
    ],
    isFetching: false,
}

export default function messages (state = initialState, action) {
    switch (action.type) {
        case types.ADD_MESSAGE:
            let {post, author, cid} = action;
            author = author || 'Guest'

            return {
                posts: [
                    ...state.posts,
                    {
                        post,
                        author,
                        cid: _.uniqueId()
                    }
                ],
                isFetching: false
            }
        case types.REQUEST_POSTS:
            return {
                posts: [...state.posts],
                isFetching: true,
            }
        case types.RECEIVE_POSTS:
            return {
                posts: _.uniqBy([
                    ...state.posts,
                    ...action.fetchedMessages
                ], '_id'),
                isFetching: false,
            }
    default:
      return state
    }
}
