import expect from 'expect'
import * as actions from '../../actions/index'
import * as types from '../../constants/ActionTypes'
import * as ui from '../../constants/ui'
describe('actions', () => {
  it('should create an action to change author', () => {
    const author = "Tyrion"
    const expectedAction = {
        type: ui.AUTHOR_CHANGE,
        author
    }
    expect(actions.changeAuthor(author)).toEqual(expectedAction)
  })
  it('should create an action to toggle state of author input to readonly or editable', () => {
    const authorIsReadOnly = false
    const expectedAction = {
        type: ui.TOGGLE_READ_ONLY_AUTHOR,
        authorIsReadOnly
    }
    expect(actions.toggleReadOnlyAuthor(authorIsReadOnly)).toEqual(expectedAction)
  })
  it('should create an action to mark message as pending ', () => {
    const clientId = 0
    const expectedAction = {
        type: ui.POST_PENDING,
        clientId
    }
    expect(actions.markMessageAsPending(clientId)).toEqual(expectedAction)
  })
  it('should create an action to request messages', () => {
    const clientId = 0
    const expectedAction = {
        type: types.REQUEST_POSTS,
    }
    expect(actions.requestMessages()).toEqual(expectedAction)
  })
})
