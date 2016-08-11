import expect from 'expect'
import * as actions from '../../actions/index'
import * as types from '../../constants/ActionTypes'
import * as ui from '../../constants/ui'
import thunk from 'redux-thunk'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'



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

describe('async actions', () => {
    const middlewares = [ thunk ]
    const mockStore = configureMockStore(middlewares)
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates RECEIVE_POSTS when message GET request completes', () => {
        nock('http://localhost:3000/api/chat/messages')
        .get('')
        .reply(200, { body: { messages: [{author: 'test user', post: 'test post', _id: 2}]}})

        const expectedActions = [
            { type: types.REQUEST_POSTS },
            { type: types.RECEIVE_POSTS, fetchedMessages: {body: {messages: [{author: 'test user', post: 'test post', _id: 2}]}}}
        ]
        const store = mockStore({messages: []})

        return store.dispatch(actions.fetchMessages())
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
