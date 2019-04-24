import {COMPETITIONS, SELECTIONS} from '../consts/actionTypes'

export const fetchCompetitions = () => ({
    type: COMPETITIONS.FETCH,
    payload: fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71')
        .then(result => result.json())
})

export const toggleSelection = (marketId, selectionId) => ({
    type: SELECTIONS.TOGGLE,
    payload: {
        marketId,
        selectionId
    }
})