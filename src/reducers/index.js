import {combineReducers} from 'redux'
import competitions from './competitions'
import drawerOpen from './drawer'

export default combineReducers({
    competitions,
    drawerOpen
})