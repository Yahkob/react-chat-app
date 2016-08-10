import expect from 'expect'
import _ from 'lodash'
import * as actions from '../../actions/index'
import * as types from '../../constants/ActionTypes'
import * as ui from '../../constants/ui'
import reducer from '../../reducers/messages'
describe('messages reducer', () => {
    const initialState = {
        posts: [
            {author: 'Guest', post: 'Hello World!', _id: '1', createdOn: Date.now()},
            {author: 'Guest', post: 'Hello World 2!', _id: '2', createdOn: Date.now()}
        ],
        isFetching: false,
    }

    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(initialState)
    })

    it('should handle ADD_MESSAGE', () => {
        let post = 'test message'
        let author = 'test user'
        let cid = '3'
        const expectedState = {
            posts: [
                {author: 'Guest', post: 'Hello World!', _id: '1', createdOn: Date.now()},
                {author: 'Guest', post: 'Hello World 2!', _id: '2', createdOn: Date.now()},
                {
                    post,
                    author,
                    cid
                }
            ],
            isFetching: false,
        }
        expect(
          reducer(initialState, {
            type: types.ADD_MESSAGE,
            post,
            author,
            cid
          })
      ).toEqual(expectedState)
    })
    it('should handle REQUEST_POSTS', () => {
        expect(
            reducer(initialState, {
                type: types.REQUEST_POSTS
            })
        ).toEqual({
            posts: [
                {author: 'Guest', post: 'Hello World!', _id: '1', createdOn: Date.now()},
                {author: 'Guest', post: 'Hello World 2!', _id: '2', createdOn: Date.now()}
            ],
            isFetching: true,
        })
    })
    it('should handle RECEIVE_POSTS', () => {
        let post = 'fetched message'
        let author = 'test user'
        let _id = 6
        let createdOn = Date.now()
        let fetchedMessage = {
            post,
            author,
            _id,
            createdOn

        }
        expect(
          reducer(initialState, {
              type: types.RECEIVE_POSTS,
              fetchedMessages: [fetchedMessage]
          })
      ).toEqual({
          isFetching: false,
          posts: [
              ...initialState.posts,
              fetchedMessage
          ]
      })
    })
})
