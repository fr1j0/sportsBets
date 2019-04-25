// @flow
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {toggleDrawer} from "../../actions/drawer";
import {connect} from "react-redux";

type Props = {
    classes: Object,
    dispatch: Function
};

const styles = {
    root: {
        flexGrow: 1,
    },
    toolBarButtons: {
        justifyContent: 'flex-end',
        paddingRight: 0
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
};

const Header = (props: Props) => {
    const {classes} = props;
    const toggleSideMenu = () => {
        props.dispatch(toggleDrawer())
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense" className={classes.toolBarButtons}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                                onClick={toggleSideMenu}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default connect()(withStyles(styles)(Header))
