import {combineReducers} from 'redux'
import competitions from './competitions'
import drawerOpen from './drawer'
import selections from './selections'

export default combineReducers({
    competitions,
    drawerOpen,
    selections
})