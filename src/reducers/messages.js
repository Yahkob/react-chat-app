import * as types from '../constants/ActionTypes'
import _ from 'lodash'
const initialState = {
    posts: [],
    isFetching: false,
}

export default function messages (state = initialState, action) {
    let posts = state.posts ? [...state.posts] : []
    switch (action.type) {
        case types.ADD_MESSAGE:
            let {post, author} = action;

            author = author || 'Guest'

            let newMessage = {
                post,
                author
            }
            posts.push(newMessage)

            return {
                posts,
                isFetching: false
            }
        case types.REQUEST_POSTS:
            return {
                posts,
                isFetching: true,
            }
        case types.RECEIVE_POSTS:
            posts.push(...action.fetchedMessages)
            return {
                posts: _.uniqBy(posts, '_id'),
                isFetching: false,
            }
    default:
      return state
    }
}
