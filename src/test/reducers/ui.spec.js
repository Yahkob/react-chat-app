import expect from 'expect'
import _ from 'lodash'
import * as ui from '../../constants/ui'
import reducer from '../../reducers/ui'
describe('ui reducer', () => {
    const initialState = {
        authorIsReadOnly: false,
        author: 'Guest',
        postsPending: [1, 2, 3]
    }

    it('should handle TOGGLE_READ_ONLY_AUTHOR', () => {
        expect(
            reducer(initialState, {
                type: ui.TOGGLE_READ_ONLY_AUTHOR,
            })
        ).toEqual({
            author: 'Guest',
            authorIsReadOnly: true,
            postsPending: []
        })
    })

    it('should handle AUTHOR_CHANGE', () => {
        expect(
            reducer(initialState, {
                type: ui.AUTHOR_CHANGE,
                author: 'The Hound'
            })
        ).toEqual({
            author: 'The Hound',
            authorIsReadOnly: false,
            postsPending: []
        })
    })

    it('should handle POST_PENDING', () => {
        expect(
            reducer(initialState, {
                type: ui.POST_PENDING,
                pendingPostId: 6
            })
        ).toEqual({
            authorIsReadOnly: initialState.authorIsReadOnly,
            author: initialState.author,
            postsPending: [6, ...initialState.postsPending]
        })
    })

})
