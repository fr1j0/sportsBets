// @flow
import {SELECTIONS} from '../consts/actionTypes'

export default function selections(state: Object = {}, action: Object) {
    switch (action.type) {
        case SELECTIONS.TOGGLE:
            let newState = {...state}
            if (newState[action.payload.marketId] === action.payload.selectionId) {
                delete newState[action.payload.marketId]
            } else {
                newState = {...newState, [action.payload.marketId]: action.payload.selectionId}
            }
            return newState
        default:
            return state
    }
}