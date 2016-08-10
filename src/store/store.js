import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import {fetchMessages} from '../actions'

export default function configureStore(preloadedState) {
    const loggerMiddleware = createLogger()
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default
            store.replaceReducer(nextReducer)
        })
    }
    store.dispatch(fetchMessages())
    setInterval(() => {store.dispatch(fetchMessages())}, 3500)

    return store
}
