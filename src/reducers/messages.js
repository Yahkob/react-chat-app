import * as types from '../constants/ActionTypes'
import _ from 'lodash'
const initialState = {
    posts: [
        {author: 'Guest', post: 'Hello World!', id: _.uniqueId(), createdOn: Date.now()},
        {author: 'Guest', post: 'Hello World 2!', id: _.uniqueId(), createdOn: Date.now()}
    ],
    isFetching: false
}

export default function messages (state = initialState, action) {
    switch (action.type) {
        case types.ADD_MESSAGE:
            let {post, author} = action;
            author = author || 'Guest'

            return {
                posts: [
                    ...state.posts,
                    {
                        post,
                        author,
                        id: _.uniqueId()
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
                posts: [
                    ...state.posts,
                    ...action.fetchedPosts
                ],
                isFetching: false,
            }
    default:
      return state
    }
}
