import * as ui from '../constants/ui'
const initialState = {
    authorIsReadOnly: false,
    author: 'Guest'
}

export default function messages (state = initialState, action) {
    switch (action.type) {
        case ui.TOGGLE_READ_ONLY_AUTHOR:
        console.log(action)
            return {
                authorIsReadOnly: action.authorIsReadOnly,
                author: state.author
            }
        case ui.AUTHOR_CHANGE:
            return {
                authorIsReadOnly: state.authorIsReadOnly,
                author: action.author
            }
    default:
      return state
    }
}
