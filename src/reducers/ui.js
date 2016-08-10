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
                authorIsReadOnly: action.authorIsReadOnly || !initialState.authorIsReadOnly,
                author: state.author,
                postsPending: initialState.postsPending
            }
        case ui.AUTHOR_CHANGE:
            return {
                authorIsReadOnly: state.authorIsReadOnly,
                author: action.author,
                postsPending: initialState.postsPending
            }
        case ui.POST_PENDING:
            return {
                authorIsReadOnly: state.authorIsReadOnly,
                author: state.author,
                postsPending: [action.pendingPostId, ...state.postsPending]
            }
    default:
      return state
    }
}
