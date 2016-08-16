import * as types from '../constants/ActionTypes'
import _ from 'lodash'
const initialState = {
    posts: [],
    isFetching: false,
}

export default function messages (state = initialState, action) {
    let posts = state.posts ? [...state.posts] : []
    let {clientId} = action
    switch (action.type) {
        case types.ADD_PENDING_MESSAGE:
            author = author || 'Guest'

            let newMessage = {
                post: action.post,
                author: action.author,
                clientId: action.clientId
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
        case types.MESSAGE_POSTED:
            let {_id, createdOn} = action
            let pendingMessage = _.first(posts.splice(_.findIndex(posts, {clientId}), 1))
            let {author, post} = pendingMessage
            let postedMessage = Object.assign(pendingMessage, {
                clientId: null,
                _id,
                createdOn,
                post,
                author
            })

            posts.push(postedMessage)

            return {
                posts: _.uniqBy(posts, '_id'),
                isFetching: false
            }
    default:
      return state
    }
}
