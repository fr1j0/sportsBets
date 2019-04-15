import {COMPETITIONS} from '../consts/actionTypes'

export default function competitions(state = {}, action) {
    switch (action.type) {
        case COMPETITIONS.FETCH:
            console.log(action)
            return action.payload
        default:
            return state
    }
}