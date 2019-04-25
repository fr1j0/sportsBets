import {getCompetitionBySelectionId} from "./collections";

const competitions = [
    {
        id: 'EVT_1',
        name: 'Real Madrid vs Barcelona',
        markets: [
            {
                id: 'MKT_1',
                name: 'Team to Win',
                selections: [
                    {
                        id: 'SEL_1',
                        name: 'Real Madrid',
                        price: 1.23
                    },
                    {
                        id: 'SEL_2',
                        name: 'Barcelona',
                        price: 2.05
                    }
                ]
            },
            {
                id: 'MKT_2',
                name: 'Player to Score First',
                selections: [
                    {
                        id: 'SEL_3',
                        name: 'Ronaldo',
                        price: 1.15
                    },
                    {
                        id: 'SEL_4',
                        name: 'Messi',
                        price: 1.3
                    },
                    {
                        id: 'SEL_5',
                        name: 'Bale',
                        price: 1.35
                    }
                ]
            }
        ]
    },
    {
        id: 'EVT_2',
        name: 'Atletico Madrid vs Malaga',
        markets: [
            {
                id: 'MKT_3',
                name: 'Team to Win',
                selections: [
                    {
                        id: 'SEL_6',
                        name: 'Atletico',
                        price: 1.4
                    },
                    {
                        id: 'SEL_7',
                        name: 'Malaga',
                        price: 3.05
                    }
                ]
            }
        ]
    }
]

it('getCompetitionBySelectionId: gets proper competition', () => {
    const result1 = {"id": "EVT_1", "markets": {"id": "MKT_1", "name": "Team to Win", "selections": {"id": "SEL_1", "name": "Real Madrid", "price": 1.23}}, "name": "Real Madrid vs Barcelona"}
    const result2 = {"id": "EVT_1", "markets": {"id": "MKT_1", "name": "Team to Win", "selections": {"id": "SEL_2", "name": "Barcelona", "price": 2.05}}, "name": "Real Madrid vs Barcelona"}
    const result3 = {"id": "EVT_2", "markets": {"id": "MKT_3", "name": "Team to Win", "selections": {"id": "SEL_6", "name": "Atletico", "price": 1.4}}, "name": "Atletico Madrid vs Malaga"}
    expect(getCompetitionBySelectionId(competitions, 'MKT_1', 'SEL_1')).toEqual(result1)
    expect(getCompetitionBySelectionId(competitions, 'MKT_1', 'SEL_2')).toEqual(result2)
    expect(getCompetitionBySelectionId(competitions, 'MKT_3', 'SEL_6')).toEqual(result3)
});
