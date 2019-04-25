export const getCompetitionBySelectionId = (competitions, marketId, selectionId) => {
    let competition = competitions.find(competition =>
        competition.markets.find(market =>
            market.id === marketId
        )
    )
    competition = {...competition, markets: competition.markets.find(market => market.id === marketId)}
    competition.markets = {
        ...competition.markets,
        selections: competition.markets.selections.find(selection => selection.id === selectionId)
    }
    return competition
}