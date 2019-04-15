import {applyMiddleware, createStore} from 'redux'
import reducers from '../reducers'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

const store = createStore(
    reducers,
    applyMiddleware(promise, logger)
)

export default store