import {SELECTIONS} from '../consts/actionTypes'

export default function selections(state = {}, action) {
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