import React, {Fragment} from 'react';
import {Button, Drawer, Grid, Divider, IconButton} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {connect} from "react-redux";
import {toggleDrawer} from "../../actions/drawer";
import {toggleSelection} from "../../actions/competitions";
import {getCompetitionBySelectionId} from "../../utils/collections";

const styles = {
    drawer: {
        width: '55%',
        flexShrink: 0,
    },
    drawerPaper: {
        width: '55%',
        position: 'absolute'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        justifyContent: 'flex-start',
    },
    deleteBtn: {
        fontSize: '.5rem'
    },
    gridItem: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    }
}

const SideDrawer = props => {
    const {classes} = props;

    return <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={props.drawerOpen}
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <div className={classes.drawerHeader}>
            <IconButton onClick={() => props.dispatch(toggleDrawer())}>
                <CloseIcon/>
            </IconButton>
        </div>
        <Divider/>
        <Grid
            container
            spacing={16}
            alignContent='center'
            alignItems='stretch'
            direction='column'
            justify='center'
        >
            {
                Object.entries(props.selections).map((entry, index) => {
                        const competition = getCompetitionBySelectionId(props.competitions, entry[0], entry[1]);
                        return <Fragment key={index}>
                            <Grid item className={classes.gridItem}>
                                <p>{`${competition.markets.selections.name} ${competition.markets.name}`}</p>
                                <p>{competition.markets.selections.price}</p>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.deleteBtn}
                                    onClick={() => props.dispatch(toggleSelection(competition.markets.id, competition.markets.selections.id))}
                                >
                                    delete
                                </Button>
                            </Grid>
                            <Divider/>
                        </Fragment>
                    }
                )
            }
        </Grid>
    </Drawer>
};

const mapStateToProps = state => ({
    drawerOpen: state.drawerOpen,
    competitions: state.competitions,
    selections: state.selections
})

export default connect(mapStateToProps)(withStyles(styles)(SideDrawer))