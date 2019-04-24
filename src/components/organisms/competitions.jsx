import React from 'react';
import {Button, Card, CardContent, CardHeader, Divider, Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
    }
};


const CompetitionsList = props => {
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
            props.competitions.map(competition => <Grid key={competition.id} item>
                <Card>
                    <CardHeader title={competition.name} className={classes.cardTitle}/>
                    <Divider/>
                    <CardContent className={classes.cardContent}>
                        {
                            competition.markets.map((market, index) => {
                                return <div className={classes.market}>
                                    <Typography className={classes.marketTitle}>
                                        {market.name}
                                    </Typography>
                                    <div className={classes.buttonsContainer}>
                                        {
                                            market.selections.map(selection =>
                                                <Button variant="outlined" color="primary"
                                                        className={classes.marketButton}>
                                                    <p>{selection.name}</p>
                                                    <p>{selection.price}</p>
                                                </Button>
                                            )
                                        }
                                    </div>
                                    {index < competition.markets.length - 1 ? <Divider/> : null}
                                </div>
                            })
                        }
                    </CardContent>
                </Card>
            </Grid>)
        }
    </Grid>
}

CompetitionsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompetitionsList)