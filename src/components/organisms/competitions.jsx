// @flow
import React from 'react';
import {Button, Card, CardContent, CardHeader, Divider, Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

type Props = {
    classes: Object,
    selections: Object,
    competitions: Array<Object>,
    toggleSelection: Function
};

const styles = {
    cardHeader: {
        borderBottom: "1px solid gray"
    },
    gridContainer: {
        marginTop: '10px',
    },
    cardContent: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important',
    },
    cardTitle: {
        textAlign: 'center',
        '& span': {
            fontSize: '1rem',
        }
    },
    market: {
        padding: '10px 0'
    },
    marketTitle: {
        paddingBottom: '10px'
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '20px'
    },
    marketButton: {
        '& span': {
            flexDirection: 'column',
            '& p': {
                fontSize: '.7rem',
                margin: 0
            }
        }
    },
    marketButtonSelected: {
        backgroundColor: 'green',
        color: 'white'
    },
};


const CompetitionsList = (props: Props) => {
    const {classes} = props;
    return <Grid
        container
        spacing={16}
        className={classes.gridContainer}
        alignContent='center'
        alignItems='stretch'
        direction='column'
        justify='center'
    >
        {
            props.competitions.map((competition, compIndex) =>
                <Grid item key={compIndex}>
                    <Card>
                        <CardHeader title={competition.name} className={classes.cardTitle}/>
                        <Divider/>
                        <CardContent className={classes.cardContent}>
                            {
                                competition.markets.map((market, marketIndex) => <div className={classes.market}
                                                                                      key={marketIndex}>
                                        <Typography className={classes.marketTitle}>
                                            {market.name}
                                        </Typography>
                                        <div className={classes.buttonsContainer}>
                                            {
                                                market.selections.map((selection, btnIndex) =>
                                                    <Button variant="outlined"
                                                            color="primary"
                                                            classes={{
                                                                root: classes.marketButton,
                                                                outlinedPrimary: props.selections[market.id] === selection.id ?
                                                                    classes.marketButtonSelected :
                                                                    null
                                                            }}
                                                            onClick={() => props.toggleSelection(market.id, selection.id)}
                                                            key={btnIndex}
                                                    >
                                                        <p>{selection.name}</p>
                                                        <p>{selection.price}</p>
                                                    </Button>
                                                )
                                            }
                                        </div>
                                        {marketIndex < competition.markets.length - 1 ? <Divider/> : null}
                                    </div>
                                )
                            }
                        </CardContent>
                    </Card>
                </Grid>
            )
        }
    </Grid>
}

export default withStyles(styles)(CompetitionsList)