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
    it('should create an action to add a pending message', () => {
        const clientId = 0
        const author = 'Jaqen H\'ghar'
        const post = 'valar morghulis'
        const expectedAction = {
            type: types.ADD_PENDING_MESSAGE,
            clientId,
            author,
            post
        }
        expect(actions.addPendingMessage({clientId, author, post})).toEqual(expectedAction)
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

    it('creates POST_MESSAGE when message POST', () => {
        const _id = 12309123
        const clientId = '1'
        const createdOn = '1471307633126'
        const post = {
            author: 'Arya',
            post: 'valar dohaeris',
            clientId
        }
        const pendingPost = Object.assign({type: types.ADD_PENDING_MESSAGE}, post)
        nock('http://localhost:3000/api/chat/newMsg')
        .post('')
        .reply(200, {
            _id,
            createdOn
        })

        const expectedActions = [
            pendingPost,
            {
                type: types.MESSAGE_POSTED,
                clientId,
                createdOn,
                _id
            }
        ]
        const store = mockStore({messages: []})

        return store.dispatch(actions.postMessage(post))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
