import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import reducer from '../../reducers/messages'
describe('messages reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            isFetching: false,
            posts: []
        })
    })

    it('should handle ADD_PENDING_MESSAGE', () => {
        const post = 'test message'
        const clientId = '1'
        const author = 'test user'
        const expectedState = {
            posts: [
                {
                    post,
                    author,
                    clientId
                }
            ],
            isFetching: false,
        }
        expect(
          reducer([], {
            type: types.ADD_PENDING_MESSAGE,
            post,
            author,
            clientId
          })
      ).toEqual(expectedState)
    })
    it('should handle REQUEST_POSTS', () => {
        expect(
            reducer([], {
                type: types.REQUEST_POSTS
            })
        ).toEqual({
            posts: [],
            isFetching: true,
        })
    })
    it('should handle RECEIVE_POSTS', () => {
        const post = 'fetched message'
        const author = 'test user'
        const _id = 6
        const createdOn = Date.now()
        const fetchedMessage = {
            post,
            author,
            _id,
            createdOn

        }
        expect(
          reducer([], {
              type: types.RECEIVE_POSTS,
              fetchedMessages: [fetchedMessage]
          })
      ).toEqual({
          isFetching: false,
          posts: [
              fetchedMessage
          ]
      })
    })
})
