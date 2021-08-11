import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Typography, Paper, ThemeProvider, Tooltip, Button, ButtonGroup, Toolbar } from '@material-ui/core';
import { GitHub, LinkedIn, Create } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const links = [
    {
        href: "https://www.linkedin.com/in/george-fane/",
        icon: <LinkedIn />, text: 'LinkedIn'
    },
    {
        href: "https://www.georgefane.com/",
        icon: <Create />, text: 'Blog'
    },
    {
        href: "https://github.com/GeorgeFane", 
        icon: <GitHub />, text: 'GitHub'
    },
]

export default function ButtonAppBar() {
    const classes = useStyles();

    const buttons = links.map(link => (
        <Button
            href={link.href}
            target='_blank'
            startIcon={link.icon}
        >
            {link.text}
        </Button>
    ))
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        George Fane
                    </Typography>
            
                    <ButtonGroup 
                        variant="outlined"
                        size='large'
                        color='inherit'
                    >
                        {buttons}
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </div>
    );
}
