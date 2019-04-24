import {DRAWER} from '../consts/actionTypes'

export default function competitions(state = false, action) {
    switch (action.type) {
        case DRAWER.TOGGLE:
            return !state
        default:
            return state
    }
}