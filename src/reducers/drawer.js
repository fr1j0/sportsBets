// @flow
import {DRAWER} from '../consts/actionTypes'

export default function competitions(state: boolean = false, action: Object) {
    switch (action.type) {
        case DRAWER.TOGGLE:
            return !state
        default:
            return state
    }
}