import React, {useState} from 'react';
import {Drawer} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {Divider, IconButton} from '@material-ui/core';
import {connect} from "react-redux";
import {toggleDrawer} from "../../actions/drawer";

const styles = {
    drawer: {
        width: '75%',
        flexShrink: 0,
    },
    drawerPaper: {
        width: '75%',
        position: 'absolute'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        justifyContent: 'flex-start',
    },
}

const SideDrawer = props => {
    const {classes} = props;
    const handleDrawerClose = () => {
        props.dispatch(toggleDrawer())
    };

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
            <IconButton onClick={handleDrawerClose}>
                <CloseIcon/>
            </IconButton>
        </div>
        <Divider/>
    </Drawer>
};

const mapStateToProps = state => ({
    drawerOpen: state.drawerOpen
})

export default connect(mapStateToProps)(withStyles(styles)(SideDrawer))