import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DropListPhone from './list/DropListPhone';
import DropListReport from './list/DropListReport';
import DropListPlaning from './list/DropListPlaning';
import DropListTool from './list/DropListTools';
import { Container, Drawer } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import DropListHelpers from './list/DropListHelpers';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    help: {
        flexGrow: 1,
    }
}))

export default function Appbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                    <Toolbar >
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>

                        <Button color="inherit"> <Link to="/" className={classes.link}>Офисы</Link></Button>
                        <Button color="inherit"><Link to="/equipment" className={classes.link}>Оборудование</Link></Button>
                        <DropListPhone />
                        <DropListPlaning />
                        <Button color="inherit">Reports</Button>
                        <DropListReport />
                        <span className={classes.help}>
                            <DropListTool />
                        </span>
                        <DropListHelpers />

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}


