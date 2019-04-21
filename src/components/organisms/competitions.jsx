import React from 'react';
import {Button, Card, CardContent, CardHeader, Divider, List, ListItem, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    cardHeader: {
        borderBottom: "1px solid gray"
    }
};

const CompetitionsList = props => {
    const {classes} = props;
    return <List>
        {
            props.competitions.map(competition => <ListItem>
                <Card>
                    <CardHeader title={competition.name}/>
                    <Divider/>
                    <CardContent>
                        {
                            competition.markets.map(market =>
                                <div>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {market.name}
                                    </Typography>
                                    {
                                        market.selections.map(selection =>
                                            <Button variant="outlined" color="primary">
                                                {selection.name}
                                                {selection.price}
                                            </Button>
                                        )
                                    }
                                    <Divider/>
                                </div>
                            )
                        }
                    </CardContent>
                </Card>
            </ListItem>)
        }
    </List>
}

CompetitionsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompetitionsList)