import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, ThemeProvider, Tooltip, Button, ButtonGroup } from '@material-ui/core';
import { GitHub, LinkedIn, Create } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <img
                        width='100%'
                        src='https://avatars.githubusercontent.com/u/39439818?v=4'
                    />
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>
                            Hi! I'm George Fane, a sophomore at the University of Michigan studying Business Adminstration and Computer Science.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper}>                        
                        <ButtonGroup 
                            variant="text" orientation='vertical' size='large'
                        >
                            {links.map(link => <Button
                                href={link.href}
                                target='_blank'
                                startIcon={link.icon}
                            >
                                {link.text}
                            </Button>)}
                        </ButtonGroup>
                    </Paper>
                </Grid>
            </Grid>
        
            <Grid container spacing={3}>
                <Grid item xs={3}>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>
                            I've liked the show Mad Men for a while, but just this summer I got into music and movies from that era. Since May I've watched seven Audrey Hepburn films as well as Some Like It Hot, Casablanca, and Singin' in the Rain. It's simply a joy to go into a Ross Building conference rooms, turn off the lights, put my feet up, and start an old movie.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        
        </div>
    );
}

const links = [
    {
        href: "https://github.com/GeorgeFane", 
        icon: <GitHub />, text: 'GitHub'
    },
    {
        href: "https://www.linkedin.com/in/george-fane/",
        icon: <LinkedIn />, text: 'LinkedIn'
    },
    {
        href: "https://www.georgefane.com/",
        icon: <Create />, text: 'Blog'
    },
]

function Home() {
        return (
                <Grid container spacing={3}>
                        <Grid item xs>
                        </Grid>

                        <Grid item xs>
                                <Paper>
                                        <Typography variant='h6'>
                                                Hi! I'm George Fane, a sophomore at the University of Michigan studying Business Adminstration and Computer Science.
                                        </Typography>
                                </Paper>
                        </Grid>
                        
                        <ButtonGroup 
                                variant="text" orientation='vertical' size='large'
                        >
                                {links.map(link => <Button
                                        href={link.href}
                                        target='_blank'
                                        startIcon={link.icon}
                                >
                                        {link.text}
                                </Button>
                                )}
                        </ButtonGroup>
                </Grid>
        );
}

export default CenteredGrid;
                                                