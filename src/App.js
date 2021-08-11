import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, ThemeProvider, Tooltip, Button, ButtonGroup, Toolbar } from '@material-ui/core';
import { GitHub, LinkedIn, Create } from '@material-ui/icons';

import Header from './Header';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
    },
}));

function CenteredGrid() {
    const classes = useStyles();

    return (
        <div>
            <Header />

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>    
                            <img
                                width='100%'
                                alt='George Fane profile'
                                src='https://avatars.githubusercontent.com/u/39439818?v=4'
                            />
                        </Paper>                        
                    </Grid>

                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography variant='h6'>
                                Hi! I'm George Fane, a sophomore at the University of Michigan studying Business Adminstration and Computer Science.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography variant='h6'>
                                I've liked the show Mad Men for a while, but just this summer I got into music and movies from that era. Since May I've watched seven Audrey Hepburn films as well as Some Like It Hot, Casablanca, and Singin' in the Rain. It's simply a joy to go into a Ross Building conference rooms, turn off the lights, put my feet up, and start an old movie.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default CenteredGrid;
                                                