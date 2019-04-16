import {COMPETITIONS} from '../consts/actionTypes'

export default function competitions(state = [], action) {
    switch (action.type) {
        case COMPETITIONS.FULFILLED:
            return action.payload.filter(competition => competition.markets.length > 0)
        default:
            return state
    }
}