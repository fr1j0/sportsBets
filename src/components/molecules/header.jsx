import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {toggleDrawer} from "../../actions/drawer";
import {connect} from "react-redux";

const styles = {
    root: {
        flexGrow: 1,
    },
    toolBarButtons: {
        textAlign: "right"
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
};

const Header = props => {
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

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(Header))
