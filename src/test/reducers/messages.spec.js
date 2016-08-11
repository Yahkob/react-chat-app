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

    it('should handle ADD_MESSAGE', () => {
        let post = 'test message'
        let author = 'test user'
        const expectedState = {
            posts: [
                {
                    post,
                    author
                }
            ],
            isFetching: false,
        }
        expect(
          reducer([], {
            type: types.ADD_MESSAGE,
            post,
            author,
            cid: '1'
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
