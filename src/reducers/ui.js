import * as ui from '../constants/ui'
const initialState = {
    authorIsReadOnly: false,
    author: 'Guest',
    postsPending: []
}

export default function messages (state = initialState, action) {
    switch (action.type) {
        case ui.TOGGLE_READ_ONLY_AUTHOR:
            return {
                authorIsReadOnly: action.authorIsReadOnly,
                author: state.author
            }
        case ui.AUTHOR_CHANGE:
            return {
                authorIsReadOnly: state.authorIsReadOnly,
                author: action.author
            }
        case ui.POST_PENDING:
            return Object.assign(action, {postsPending: [action.pendingPostId, ...state.postsPending]})
    default:
      return state
    }
}
