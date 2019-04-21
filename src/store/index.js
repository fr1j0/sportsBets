import {applyMiddleware, compose, createStore} from 'redux';
import reducers from '../reducers';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

const store = createStore(
    reducers,
    compose(
        applyMiddleware(promise, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

export default store